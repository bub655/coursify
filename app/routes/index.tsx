import Unit from "../components/Unit";
import {
	Box,
	Heading,
	Input,
	Stack,
	Text,
	Button,
	Divider,
	Alert,
	AlertIcon,
	AlertTitle,
	AlertDescription,
	Spacer,
	HStack,
	Link,
} from "@chakra-ui/react";
import { Link as RemixLink } from "@remix-run/react";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa6";
import { ActionArgs, json, redirect } from "@remix-run/node";
import { createChapters } from "~/models/course.server";
import mixpanel from "mixpanel-browser";
import { useUser } from "@clerk/remix";
import { rootAuthLoader } from "@clerk/remix/ssr.server";
import type { LoaderFunction } from "@remix-run/node";

// export const loader: LoaderFunction = (args) => {
// 	return rootAuthLoader(
// 		args,
// 		({ request }) => {
// 			const { userId } = request.auth;
// 			console.log("hello")
// 			console.log(userId);
// 			return { yourData: "here" };
// 		},
// 		{ loadUser: true }
// 	);
// };

export async function action({ request }: ActionArgs) {
	try {
		const formData = await request.formData();
		const response = await createChapters(
			formData.get("title") as string,
			formData.getAll("unit") as string[]
		);
		return redirect(`/create/${response.courseId}/`);
	} catch (error: unknown) {
		console.error(error);
		return json(
			{ message: "Sorry, we couldn't create the project" },
			{
				status: 500,
			}
		);
	}
}

export default function Home() {
	const { isSignedIn, isLoaded, user } = useUser();
	const [units, setUnits] = useState(["", "", ""]);
	const [title, setTitle] = useState("");

	const navigation = useNavigation();
	const actionData = useActionData<typeof action>();

	return (
		<>
			{isSignedIn ? (
				<Form
					onSubmit={() => {
						mixpanel.track("Submit Create Course Form", {
							title: title,
						});
					}}
					method="post"
					action="/?index"
				>
					<Stack maxW="xl" justify="center" margin={"auto"} p={8} spacing={4}>
						<Heading
							as="h1"
							fontWeight={"black"}
							size={{ base: "xl", md: "2xl" }}
							textAlign={"center"}
						>
							Create a Course
						</Heading>

						<Alert status="info" borderRadius={"lg"}>
							<AlertIcon />
							<Text fontSize={{ base: "sm", md: "md" }}>
								Enter in a course title, or what you want to learn about. Then
								enter a list of units, which are the specifics you want to
								learn. Hit "Let's Go" and our AI will generate a course for you!
							</Text>
						</Alert>

						<Stack spacing={{ base: 2, md: 4 }}>
							<Stack
								direction={["column", "row"]}
								align={{ base: "start", md: "center" }}
								justify={"space-between"}
								spacing={{ base: 1, md: 0 }}
							>
								<Text fontWeight={"bold"} fontSize={{ base: "lg", md: "xl" }}>
									Title:
								</Text>
								<Input
									maxW="sm"
									disabled={navigation.state === "submitting"}
									name="title"
									isRequired
									size="lg"
									placeholder="History of WWII"
									onChange={(e) => setTitle(e.target.value)}
									value={title}
								/>
							</Stack>
							{units.map((u, index) => (
								<Unit
									key={index}
									index={index}
									disabled={navigation.state === "submitting"}
									onChange={(e) => {
										const newUnits = [...units];
										newUnits[index] = e;
										setUnits(newUnits);
									}}
								/>
							))}
						</Stack>

						<Stack direction={"row"} align="center" spacing={4}>
							<Divider orientation="horizontal" />
							<Box>
								<Button
									leftIcon={<FaPlus />}
									onClick={() =>
										setUnits((units) => {
											const newUnits = [...units];
											newUnits.push("");
											return newUnits;
										})
									}
								>
									Add Unit
								</Button>
							</Box>
							<Box>
								<Button
									leftIcon={<FaTrash />}
									onClick={() => {
										const newUnits = [...units];
										newUnits.pop();
										setUnits(newUnits);
									}}
								>
									Delete Unit
								</Button>
							</Box>
							<Divider orientation="horizontal" />
						</Stack>

						<Stack spacing={4}>
							<Button
								colorScheme="blue"
								isLoading={navigation.state === "submitting"}
								loadingText={"Creating Your Course..."}
								type="submit"
							>
								Let's Go!
							</Button>

							{actionData?.message && (
								<Alert status="error">
									<AlertIcon />
									<AlertTitle>Something went wrong!</AlertTitle>
									<AlertDescription>
										Error: {actionData.message}
									</AlertDescription>
								</Alert>
							)}
						</Stack>
					</Stack>
				</Form>
			) : (
				<Stack
					w={"100%"}
					h={"100%"}
					direction={["row", "column"]}
					alignItems={"center"}
				>
					<Spacer />
					<Stack w={"100%"} alignItems={"center"}>
						<Text fontSize={"3xl"} fontWeight={"black"}>
							Please Login/SignUp to create a course
						</Text>
						<HStack>
							<Button
								as={RemixLink}
								to="/login"
								mx={2}
								background={"whiteAlpha.900"}
								color={"black"}
							>
								Login
							</Button>
							<Button as={RemixLink} to="/signup" mx={2} colorScheme="blue">
								Signup
							</Button>
						</HStack>
					</Stack>
					<Spacer />
				</Stack>
			)}
		</>
	);
}
