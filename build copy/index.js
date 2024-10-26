var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => entry_server_default
});
var import_stream = require("stream"), import_cache = __toESM(require("@emotion/cache")), import_react = require("@emotion/react"), import_create_instance = __toESM(require("@emotion/server/create-instance")), import_node = require("@remix-run/node"), import_react2 = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3, handleRequest = (request, responseStatusCode, responseHeaders, remixContext, loadContext) => (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext
) : handleBrowserRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext
), entry_server_default = handleRequest, handleBotRequest = (request, responseStatusCode, responseHeaders, remixContext) => new Promise((resolve, reject) => {
  let didError = !1, emotionCache = (0, import_cache.default)({ key: "css" }), { pipe, abort } = (0, import_server.renderToPipeableStream)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.CacheProvider, { value: emotionCache, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    {
      onAllReady: () => {
        let reactBody = new import_stream.PassThrough(), bodyWithStyles = (0, import_create_instance.default)(emotionCache).renderStylesToNodeStream();
        reactBody.pipe(bodyWithStyles), responseHeaders.set("Content-Type", "text/html"), resolve(
          new import_node.Response(bodyWithStyles, {
            headers: responseHeaders,
            status: didError ? 500 : responseStatusCode
          })
        ), pipe(reactBody);
      },
      onShellError: (error) => {
        reject(error);
      },
      onError: (error) => {
        didError = !0, console.error(error);
      }
    }
  );
  setTimeout(abort, ABORT_DELAY);
}), handleBrowserRequest = (request, responseStatusCode, responseHeaders, remixContext) => new Promise((resolve, reject) => {
  let didError = !1, emotionCache = (0, import_cache.default)({ key: "css" }), { pipe, abort } = (0, import_server.renderToPipeableStream)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.CacheProvider, { value: emotionCache, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 95,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 94,
      columnNumber: 7
    }, this),
    {
      onShellReady: () => {
        let reactBody = new import_stream.PassThrough(), bodyWithStyles = (0, import_create_instance.default)(emotionCache).renderStylesToNodeStream();
        reactBody.pipe(bodyWithStyles), responseHeaders.set("Content-Type", "text/html"), resolve(
          new import_node.Response(bodyWithStyles, {
            headers: responseHeaders,
            status: didError ? 500 : responseStatusCode
          })
        ), pipe(reactBody);
      },
      onShellError: (error) => {
        reject(error);
      },
      onError: (error) => {
        didError = !0, console.error(error);
      }
    }
  );
  setTimeout(abort, ABORT_DELAY);
});

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react4 = require("@chakra-ui/react"), import_react5 = require("@remix-run/react");

// src/utils/theme.ts
var import_react3 = require("@chakra-ui/react"), config = {
  initialColorMode: "dark",
  useSystemColorMode: !1
}, theme = (0, import_react3.extendTheme)({ config }), theme_default = theme;

// app/root.tsx
var import_react6 = require("@remix-run/react"), import_nprogress = __toESM(require("nprogress"));

// node_modules/nprogress/nprogress.css
var nprogress_default = "/build/_assets/nprogress-VU4VAFN5.css";

// app/root.tsx
var import_react7 = require("react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8"
}), links = () => [{ rel: "stylesheet", href: nprogress_default }];
function Document({
  children,
  title = "Coursify | AI-Generated Courses"
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react5.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 52,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "script",
        {
          async: !0,
          src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6458965765037147",
          crossOrigin: "anonymous"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 53,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("title", { children: title }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 58,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react5.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 59,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 50,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react5.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 63,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react5.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 64,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react5.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 65,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 61,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 49,
    columnNumber: 3
  }, this);
}
function App() {
  let transition = (0, import_react5.useNavigation)();
  return (0, import_react7.useEffect)(() => {
    transition.state !== "idle" ? import_nprogress.default.start() : import_nprogress.default.done();
  }, [transition.state]), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.ChakraProvider, { theme: theme_default, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.Box, { h: "100vh", overflow: "scroll", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react4.Flex,
      {
        as: "header",
        align: "center",
        justify: "space-between",
        bg: "gray.800",
        px: 4,
        h: "90px",
        position: "sticky",
        top: 0,
        zIndex: 10,
        boxShadow: "xl",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            import_react4.Text,
            {
              display: { lg: "flex", base: "none" },
              as: import_react6.Link,
              to: "/",
              fontSize: "2xl",
              fontWeight: "black",
              color: "white",
              children: "Coursify"
            },
            void 0,
            !1,
            {
              fileName: "app/root.tsx",
              lineNumber: 98,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.HStack, { spacing: { base: 1, md: 4 }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.Link, { as: import_react6.Link, to: "/", mx: 2, color: "white", children: "Create New Course" }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 109,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.Link, { as: import_react6.Link, to: "/gallery", mx: 2, color: "white", children: "Gallery" }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 112,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.Link, { as: import_react6.Link, to: "/contact", mx: 2, color: "white", children: "Contact" }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 115,
              columnNumber: 8
            }, this)
          ] }, void 0, !0, {
            fileName: "app/root.tsx",
            lineNumber: 108,
            columnNumber: 7
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/root.tsx",
        lineNumber: 86,
        columnNumber: 6
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.Box, { h: "calc(100vh - 90px)", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react5.Outlet, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 121,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 120,
      columnNumber: 6
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 85,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 84,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 83,
    columnNumber: 3
  }, this);
}
function CatchBoundary() {
  let caught = (0, import_react5.useCatch)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Document, { title: `${caught.status} ${caught.statusText}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.ChakraProvider, { theme: theme_default, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.Heading, { as: "h1", bg: "purple.600", children: [
    "[CatchBoundary]: ",
    caught.status,
    " ",
    caught.statusText
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 137,
    columnNumber: 6
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 136,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 135,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 134,
    columnNumber: 3
  }, this);
}
function ErrorBoundary({ error }) {
  return console.log("root ErrorBoundary"), console.error(error), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Document, { title: "Error!", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.ChakraProvider, { theme: theme_default, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.Box, { h: "100vh", overflow: "scroll", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react4.Flex,
      {
        as: "header",
        align: "center",
        justify: "space-between",
        bg: "gray.800",
        px: 4,
        h: "90px",
        position: "sticky",
        top: 0,
        zIndex: "sticky",
        boxShadow: "xl",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            import_react4.Text,
            {
              display: { lg: "flex", base: "none" },
              as: import_react6.Link,
              to: "/",
              fontSize: "2xl",
              fontWeight: "black",
              color: "white",
              children: "Coursify"
            },
            void 0,
            !1,
            {
              fileName: "app/root.tsx",
              lineNumber: 166,
              columnNumber: 7
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.HStack, { spacing: { base: 2, md: 4 }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.Link, { as: import_react6.Link, to: "/", mx: 2, color: "white", children: "Create New Course" }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 177,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.Link, { as: import_react6.Link, to: "/gallery", mx: 2, color: "white", children: "Course Gallery" }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 180,
              columnNumber: 8
            }, this)
          ] }, void 0, !0, {
            fileName: "app/root.tsx",
            lineNumber: 176,
            columnNumber: 7
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/root.tsx",
        lineNumber: 154,
        columnNumber: 6
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.Center, { h: "calc(100vh - 90px)", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react4.Alert,
      {
        borderRadius: "lg",
        maxW: "sm",
        status: "error",
        variant: "subtle",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.AlertIcon, { boxSize: "40px", mr: 0 }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 197,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.AlertTitle, { mt: 4, mb: 1, fontSize: "xl", children: "Uh oh! An error occurred!" }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 198,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.AlertDescription, { maxWidth: "sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.Text, { fontWeight: "bold", children: "Please reload and try again." }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 202,
              columnNumber: 9
            }, this),
            " If that doesn't work, check back later."
          ] }, void 0, !0, {
            fileName: "app/root.tsx",
            lineNumber: 201,
            columnNumber: 8
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/root.tsx",
        lineNumber: 187,
        columnNumber: 7
      },
      this
    ) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 186,
      columnNumber: 6
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 153,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 152,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 151,
    columnNumber: 3
  }, this);
}

// app/routes/course.$courseId.$unitId.$chapterId.tsx
var course_courseId_unitId_chapterId_exports = {};
__export(course_courseId_unitId_chapterId_exports, {
  action: () => action,
  default: () => course_courseId_unitId_chapterId_default,
  loader: () => loader
});
var import_node2 = require("@remix-run/node"), import_react13 = require("@remix-run/react");

// app/models/course.server.ts
var import_youtube_transcript = require("youtube-transcript");

// src/utils/firebase.ts
var import_app = require("firebase/app"), import_firestore = require("firebase/firestore"), firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
}, firebase_app = (0, import_app.getApps)().length === 0 ? (0, import_app.initializeApp)(firebaseConfig) : (0, import_app.getApps)()[0];
var db = (0, import_firestore.getFirestore)(firebase_app);

// app/models/course.server.ts
var import_firestore2 = require("@firebase/firestore");
async function getAllCourses() {
  let coursesRef = await (0, import_firestore2.collection)(db, "courses"), queryRef = (0, import_firestore2.query)(
    coursesRef,
    (0, import_firestore2.where)("completed", "==", !0),
    (0, import_firestore2.where)("public", "==", !0)
  );
  return await (await (0, import_firestore2.getDocs)(queryRef)).docs.map((doc4) => ({ data: doc4.data(), id: doc4.id }));
}
async function getCourse(id) {
  let data = {
    title: "",
    units: []
  }, document2 = await (0, import_firestore2.getDoc)((0, import_firestore2.doc)(db, "courses", id));
  return document2.exists() ? (data = document2.data(), data) : {
    error: "Course not found"
  };
}
async function promptGemini(prompt) {
  let jsonResponse = await (await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [
              {
                text: prompt
              }
            ]
          }
        ],
        generationConfig: {
          temperature: 1,
          topK: 64,
          topP: 0.95,
          maxOutputTokens: 8192,
          responseMimeType: "application/json"
        }
      })
    }
  )).json();
  return console.log(prompt, `
`, jsonResponse), jsonResponse.candidates[0].content.parts[0].text;
}
async function searchYouTube(searchQuery) {
  let json7 = await (await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API}&q=${searchQuery}&videoDuration=medium&videoEmbeddable=true&type=video&part=snippet&maxResults=1`,
    {
      method: "GET"
    }
  )).json();
  return json7.items[0] == null && console.log("search yt"), json7.items[0].id.videoId;
}
async function getTranscript(videoId) {
  try {
    let transcript_arr = await import_youtube_transcript.YoutubeTranscript.fetchTranscript(videoId, {
      lang: "en",
      country: "EN"
    }), transcript = "";
    for (let i = 0; i < transcript_arr.length; i++)
      transcript += transcript_arr[i].text + " ";
    return { transcript: transcript.replaceAll(`
`, " "), success: !0 };
  } catch {
    return { transcript: "error", success: !1 };
  }
}
async function createChapters(title, unitsArray) {
  let unitsString = "";
  for (let i = 1; i <= unitsArray.length; i++)
    unitsString += `Unit ${i}: ${unitsArray[i - 1]}
`;
  let prompt = `${unitsString}
	It is your job to create a course about ${title}. The user has requested to create chapters for each of the above units. Then, for each chapter, provide a detailed youtube search query that can be used to find an informative educational video for each chapter. Each query should give an educational informative course in youtube.
	Important: Give the response in an array of JSON like the example below with the title of each array index corresponding to the unit title:
	[
		{
			"title": "World War II Battles",
			"chapters": [
				{
					"youtube_search_query": "all about important battles in WW2",
					"chapter_title": "Important Battles"
				},
				{
					"youtube_search_query": "battle strategies in WW2",
					"chapter_title": "Battle Strategies"
				},
				{
					"youtube_search_query": "Battle of Stalingrad short explanation",
					"chapter_title": "Battle of Stalingrad"
				} etc...
			]
		},
		{
			"title": "World War II Alliances",
			"chapters": [
				{
					"youtube_search_query": "all about the allied powers in WW2",
					"chapter_title": "Allied Powers"
				},
				{
					"youtube_search_query": "all about the axis powers in WW2",
					"chapter_title": "Axis Powers"
				},
				{
					"youtube_search_query": "netural powers and their roles in WW2",
					"chapter_title": "Neutral Powers"
				} etc...
			]
		}
	]
	`;
  try {
    console.log("starting to create chapters");
    let geminiResponse = await promptGemini(prompt);
    console.log("created chapters"), console.log(geminiResponse);
    let units = await JSON.parse(geminiResponse);
    console.log("created chapters");
    let docRef = await (0, import_firestore2.addDoc)((0, import_firestore2.collection)(db, "courses"), {
      title,
      units,
      completed: !1,
      public: !1
    });
    return console.log("added to firebase", docRef.id), {
      courseId: await docRef.id
    };
  } catch (error) {
    return console.log("FAILED: Error Info getting course info"), console.log(`error:
`, error, `

`), {
      message: error
    };
  }
}
async function chatBot(prompt, id, unitId, chapterId, chat) {
  console.log("CHATBOT ENTERED"), console.log(id), chat.courseId != id && (chat.examples = [], chat.courseId = id);
  let course = await getCourse(id);
  prompt = "answer in simple english. THE FOLLOWING IS THE PROMPT: " + prompt + `
ONE TO TWO SENTENCE ANSWER USING THE FOLLOWING CONTEXT USING PLAIN AND SIMPLE ENGLISH. The title of the course is: ` + course.title + ". The course has the following unit titles and chapters: " + course.units[unitId].title + " with the current chapter on " + course.units[unitId].chapters[chapterId].title + " and a summary of " + course.units[unitId].chapters[chapterId].summary;
  let response = await promptGemini(
    prompt
  );
  return console.log("prompt"), console.log(prompt), console.log("context chat"), console.log(chat), console.log("chat bot response"), console.log(response), chat.examples.push({
    input: {
      content: prompt
    },
    output: {
      content: JSON.parse(response).answer ? JSON.parse(response).answer : response
    }
  }), chat.messages = chat.examples, console.log(`

CURRENT CHAT`), console.log(chat), chat;
}

// app/routes/course.$courseId.$unitId.$chapterId.tsx
var import_react14 = require("@chakra-ui/react");

// src/components/Question.tsx
var import_react8 = require("@chakra-ui/react"), import_react9 = require("react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Question({
  question,
  onChange,
  correct,
  incorrect
}) {
  let [value, setValue] = (0, import_react9.useState)("");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    import_react8.Box,
    {
      bg: correct ? "green.800" : incorrect ? "red.800" : "whiteAlpha.300",
      borderRadius: "md",
      p: 4,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react8.Stack, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react8.Text, { fontWeight: "bold", children: question.question }, void 0, !1, {
          fileName: "src/components/Question.tsx",
          lineNumber: 33,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          import_react8.RadioGroup,
          {
            onChange: (e) => {
              onChange(e), setValue(e);
            },
            value,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react8.Stack, { spacing: 1, divider: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react8.StackDivider, {}, void 0, !1, {
              fileName: "src/components/Question.tsx",
              lineNumber: 41,
              columnNumber: 34
            }, this), children: question.answers ? question.answers.map((answer, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              import_react8.Radio,
              {
                size: "sm",
                name: `question${i}`,
                colorScheme: "blue",
                value: `${i}`,
                children: answer.choice
              },
              i,
              !1,
              {
                fileName: "src/components/Question.tsx",
                lineNumber: 44,
                columnNumber: 10
              },
              this
            )) : question.choices.map((choices, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              import_react8.Radio,
              {
                size: "sm",
                name: `question${i}`,
                value: `${i}`,
                colorScheme: "blue",
                children: choices
              },
              i,
              !1,
              {
                fileName: "src/components/Question.tsx",
                lineNumber: 55,
                columnNumber: 10
              },
              this
            )) }, void 0, !1, {
              fileName: "src/components/Question.tsx",
              lineNumber: 41,
              columnNumber: 6
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "src/components/Question.tsx",
            lineNumber: 34,
            columnNumber: 5
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "src/components/Question.tsx",
        lineNumber: 32,
        columnNumber: 4
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "src/components/Question.tsx",
      lineNumber: 27,
      columnNumber: 3
    },
    this
  );
}

// app/routes/course.$courseId.$unitId.$chapterId.tsx
var import_fa62 = require("react-icons/fa6");

// src/components/CourseSidebar.tsx
var import_react10 = require("@chakra-ui/react"), import_react11 = require("react"), import_fa6 = require("react-icons/fa6"), import_react12 = require("@remix-run/react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), CourseSidebar = ({ data, params }) => {
  let { isOpen, onOpen, onClose } = (0, import_react10.useDisclosure)(), btnRef = (0, import_react11.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      import_react10.Button,
      {
        colorScheme: "gray",
        position: "fixed",
        top: 105,
        right: 4,
        zIndex: 11,
        size: "sm",
        leftIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_fa6.FaBars, {}, void 0, !1, {
          fileName: "src/components/CourseSidebar.tsx",
          lineNumber: 40,
          columnNumber: 15
        }, this),
        display: { base: "inline-flex", md: "none" },
        ref: btnRef,
        onClick: onOpen,
        children: "Open Menu"
      },
      void 0,
      !1,
      {
        fileName: "src/components/CourseSidebar.tsx",
        lineNumber: 33,
        columnNumber: 4
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      import_react10.Stack,
      {
        bg: "whiteAlpha.300",
        w: "md",
        p: 8,
        top: 90,
        position: "sticky",
        h: "100%",
        borderTopRightRadius: "3xl",
        boxShadow: "xl",
        divider: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react10.StackDivider, {}, void 0, !1, {
          fileName: "src/components/CourseSidebar.tsx",
          lineNumber: 56,
          columnNumber: 14
        }, this),
        display: { base: "none", md: "flex" },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react10.Heading, { fontWeight: "black", size: "2xl", children: data.title }, void 0, !1, {
            fileName: "src/components/CourseSidebar.tsx",
            lineNumber: 59,
            columnNumber: 5
          }, this),
          data.units.map((unit, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react10.Box, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react10.Stack, { spacing: 0, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                import_react10.Box,
                {
                  color: "whiteAlpha.600",
                  fontWeight: "semibold",
                  letterSpacing: "wide",
                  fontSize: "xs",
                  textTransform: "uppercase",
                  children: [
                    "Unit ",
                    i + 1
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "src/components/CourseSidebar.tsx",
                  lineNumber: 65,
                  columnNumber: 8
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                import_react10.Link,
                {
                  as: import_react12.Link,
                  fontSize: "xl",
                  fontWeight: "bold",
                  to: `/course/${params.courseId}/${i}`,
                  children: unit.title
                },
                void 0,
                !1,
                {
                  fileName: "src/components/CourseSidebar.tsx",
                  lineNumber: 74,
                  columnNumber: 8
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "src/components/CourseSidebar.tsx",
              lineNumber: 64,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react10.Stack, { spacing: 0, children: unit.chapters.map((chapter, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              import_react10.Link,
              {
                as: import_react12.Link,
                to: `/course/${params.courseId}/${i}/${index}`,
                children: chapter.title
              },
              index,
              !1,
              {
                fileName: "src/components/CourseSidebar.tsx",
                lineNumber: 85,
                columnNumber: 9
              },
              this
            )) }, void 0, !1, {
              fileName: "src/components/CourseSidebar.tsx",
              lineNumber: 83,
              columnNumber: 7
            }, this)
          ] }, i, !0, {
            fileName: "src/components/CourseSidebar.tsx",
            lineNumber: 63,
            columnNumber: 6
          }, this))
        ]
      },
      void 0,
      !0,
      {
        fileName: "src/components/CourseSidebar.tsx",
        lineNumber: 47,
        columnNumber: 4
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      import_react10.Drawer,
      {
        isOpen,
        placement: "right",
        onClose,
        finalFocusRef: btnRef,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react10.DrawerOverlay, {}, void 0, !1, {
            fileName: "src/components/CourseSidebar.tsx",
            lineNumber: 103,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react10.DrawerContent, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react10.DrawerCloseButton, { mt: 2 }, void 0, !1, {
              fileName: "src/components/CourseSidebar.tsx",
              lineNumber: 105,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react10.DrawerHeader, { children: data.title }, void 0, !1, {
              fileName: "src/components/CourseSidebar.tsx",
              lineNumber: 106,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react10.DrawerBody, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react10.Stack, { spacing: 4, children: data.units.map((unit, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react10.Box, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react10.Stack, { spacing: 0, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                  import_react10.Box,
                  {
                    color: "whiteAlpha.600",
                    fontWeight: "semibold",
                    letterSpacing: "wide",
                    fontSize: "xs",
                    textTransform: "uppercase",
                    children: [
                      "Unit ",
                      i + 1
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "src/components/CourseSidebar.tsx",
                    lineNumber: 113,
                    columnNumber: 11
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                  import_react10.Link,
                  {
                    as: import_react12.Link,
                    fontSize: "xl",
                    fontWeight: "bold",
                    to: `/course/${params.courseId}/${i}`,
                    children: unit.title
                  },
                  void 0,
                  !1,
                  {
                    fileName: "src/components/CourseSidebar.tsx",
                    lineNumber: 122,
                    columnNumber: 11
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "src/components/CourseSidebar.tsx",
                lineNumber: 112,
                columnNumber: 10
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react10.Stack, { spacing: 0, children: unit.chapters.map((chapter, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                import_react10.Link,
                {
                  as: import_react12.Link,
                  to: `/course/${params.courseId}/${i}/${index}`,
                  children: chapter.title
                },
                index,
                !1,
                {
                  fileName: "src/components/CourseSidebar.tsx",
                  lineNumber: 133,
                  columnNumber: 12
                },
                this
              )) }, void 0, !1, {
                fileName: "src/components/CourseSidebar.tsx",
                lineNumber: 131,
                columnNumber: 10
              }, this)
            ] }, i, !0, {
              fileName: "src/components/CourseSidebar.tsx",
              lineNumber: 111,
              columnNumber: 9
            }, this)) }, void 0, !1, {
              fileName: "src/components/CourseSidebar.tsx",
              lineNumber: 109,
              columnNumber: 7
            }, this) }, void 0, !1, {
              fileName: "src/components/CourseSidebar.tsx",
              lineNumber: 108,
              columnNumber: 6
            }, this)
          ] }, void 0, !0, {
            fileName: "src/components/CourseSidebar.tsx",
            lineNumber: 104,
            columnNumber: 5
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "src/components/CourseSidebar.tsx",
        lineNumber: 97,
        columnNumber: 4
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "src/components/CourseSidebar.tsx",
    lineNumber: 32,
    columnNumber: 3
  }, this);
}, CourseSidebar_default = CourseSidebar;

// app/routes/course.$courseId.$unitId.$chapterId.tsx
var import_react15 = require("react");
var import_firestore3 = require("@firebase/firestore"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), global_chat = { courseId: 0, examples: [], messages: [] }, loader = async ({ params }) => {
  if ((await getCourse(params.courseId)).error)
    throw new Response(null, {
      status: 404,
      statusText: "Not Found"
    });
  {
    let chat = await (0, import_firestore3.getDoc)((0, import_firestore3.doc)(db, "chat", "MfmN5BhbPpaLzBuNjV9l")) || "";
    return (0, import_node2.json)({
      params,
      data: await getCourse(params.courseId),
      chat: chat.data()
    });
  }
};
async function action({ request }) {
  let formData = await request.formData(), formObject = Object.fromEntries(formData), prompt = formObject.message.toString(), courseId = formObject.courseId.toString(), chapterId = formObject.chapterId.toString(), unitId = formObject.unitId.toString();
  return console.log("courseID", courseId), global_chat = await chatBot(
    prompt,
    courseId,
    unitId,
    chapterId,
    global_chat
  ), !0;
}
var PostSlug = () => {
  let { params, data, chat } = (0, import_react13.useLoaderData)(), chapterInfo = data.units[params.unitId].chapters[params.chapterId], [check, setCheck] = (0, import_react15.useState)(!1);
  return (0, import_react15.useEffect)(() => {
    localStorage.setItem("chat", JSON.stringify(global_chat));
  }, [global_chat]), /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Stack, { direction: "row", h: "100%", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CourseSidebar_default, { data, params }, void 0, !1, {
      fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
      lineNumber: 98,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Box, { overflowY: "scroll", p: 8, w: "100%", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Stack, { w: "100%", h: "100%", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Stack, { direction: { base: "column", md: "row" }, spacing: 8, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Stack, { w: "100%", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Stack, { spacing: 0, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              import_react14.Box,
              {
                color: "whiteAlpha.600",
                fontWeight: "semibold",
                letterSpacing: "wide",
                fontSize: "xs",
                textTransform: "uppercase",
                children: [
                  "Unit ",
                  +params.unitId + 1,
                  " \u2022 Chapter",
                  " ",
                  +params.chapterId + 1
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
                lineNumber: 104,
                columnNumber: 9
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Heading, { children: [
              " ",
              chapterInfo.title
            ] }, void 0, !0, {
              fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
              lineNumber: 114,
              columnNumber: 9
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
            lineNumber: 103,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            import_react14.AspectRatio,
            {
              overflow: "clip",
              borderRadius: "md",
              w: "100%",
              maxH: "sm",
              ratio: 16 / 9,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                "iframe",
                {
                  title: "chapter video",
                  src: `https://www.youtube.com/embed/${chapterInfo.video ? chapterInfo.video : chapterInfo.video_id}`,
                  allowFullScreen: !0
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
                  lineNumber: 124,
                  columnNumber: 9
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
              lineNumber: 117,
              columnNumber: 8
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Heading, { size: "lg", children: "Video Summary" }, void 0, !1, {
            fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
            lineNumber: 133,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Text, { children: chapterInfo.summary ? chapterInfo.summary : chapterInfo.video_summary }, void 0, !1, {
            fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
            lineNumber: 134,
            columnNumber: 8
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
          lineNumber: 102,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Stack, { w: { base: "100%", md: "xl" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.HStack, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              import_react14.Button,
              {
                size: "md",
                onClick: () => {
                  setCheck(!0);
                },
                children: "Knowledge Check"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
                lineNumber: 143,
                columnNumber: 9
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Spacer, {}, void 0, !1, {
              fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
              lineNumber: 151,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              import_react14.Button,
              {
                size: "md",
                onClick: () => {
                  setCheck(!1);
                },
                children: "ChatBot"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
                lineNumber: 152,
                columnNumber: 9
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
            lineNumber: 142,
            columnNumber: 8
          }, this),
          check && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(KnowledgeCheck, { chapterInfo }, void 0, !1, {
            fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
            lineNumber: 161,
            columnNumber: 18
          }, this),
          !check && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            ChatBox,
            {
              data: {
                id: params.courseId,
                chat,
                chapter: params.chapterId,
                unit: params.unitId
              }
            },
            void 0,
            !1,
            {
              fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
              lineNumber: 163,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
          lineNumber: 141,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
        lineNumber: 101,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Spacer, {}, void 0, !1, {
        fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
        lineNumber: 174,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Divider, {}, void 0, !1, {
        fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
        lineNumber: 175,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Stack, { direction: "row", pb: 8, children: [
        data.units[params.unitId].chapters[+params.chapterId - 1] ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.LinkBox, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Stack, { direction: "row", align: "center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Icon, { as: import_fa62.FaChevronLeft }, void 0, !1, {
            fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
            lineNumber: 180,
            columnNumber: 10
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Stack, { justify: "start", spacing: 0, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Text, { textAlign: "left", children: "Previous" }, void 0, !1, {
              fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
              lineNumber: 182,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Heading, { size: "md", textAlign: "left", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              import_react14.LinkOverlay,
              {
                as: import_react13.Link,
                to: `/course/${params.courseId}/${params.unitId}/${+params.chapterId - 1}`,
                children: data.units[params.unitId].chapters[+params.chapterId - 1].title
              },
              void 0,
              !1,
              {
                fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
                lineNumber: 184,
                columnNumber: 12
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
              lineNumber: 183,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
            lineNumber: 181,
            columnNumber: 10
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
          lineNumber: 179,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
          lineNumber: 178,
          columnNumber: 8
        }, this) : params.unitId > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.LinkBox, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Stack, { direction: "row", align: "center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Icon, { as: import_fa62.FaChevronLeft }, void 0, !1, {
            fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
            lineNumber: 203,
            columnNumber: 10
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Stack, { justify: "start", spacing: 0, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Text, { textAlign: "left", children: "Previous" }, void 0, !1, {
              fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
              lineNumber: 205,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Heading, { size: "md", textAlign: "left", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              import_react14.LinkOverlay,
              {
                as: import_react13.Link,
                to: `/course/${params.courseId}/${+params.unitId - 1}/${data.units[+params.unitId - 1].chapters.length - 1}`,
                children: data.units[+params.unitId - 1].chapters[data.units[+params.unitId - 1].chapters.length - 1].title
              },
              void 0,
              !1,
              {
                fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
                lineNumber: 207,
                columnNumber: 12
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
              lineNumber: 206,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
            lineNumber: 204,
            columnNumber: 10
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
          lineNumber: 202,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
          lineNumber: 201,
          columnNumber: 8
        }, this) : "",
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Spacer, {}, void 0, !1, {
          fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
          lineNumber: 226,
          columnNumber: 7
        }, this),
        data.units[params.unitId].chapters.length == +params.chapterId + 1 ? data.units.length == +params.unitId + 1 ? "" : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.LinkBox, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Stack, { direction: "row", align: "center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Stack, { justify: "end", spacing: 0, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Text, { textAlign: "right", children: "Next" }, void 0, !1, {
              fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
              lineNumber: 235,
              columnNumber: 12
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Heading, { size: "md", textAlign: "right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              import_react14.LinkOverlay,
              {
                as: import_react13.Link,
                to: `/course/${params.courseId}/${+params.unitId + 1}/0`,
                children: data.units[+params.unitId + 1].chapters[0].title
              },
              void 0,
              !1,
              {
                fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
                lineNumber: 237,
                columnNumber: 13
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
              lineNumber: 236,
              columnNumber: 12
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
            lineNumber: 234,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Icon, { as: import_fa62.FaChevronRight }, void 0, !1, {
            fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
            lineNumber: 247,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
          lineNumber: 233,
          columnNumber: 10
        }, this) }, void 0, !1, {
          fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
          lineNumber: 232,
          columnNumber: 9
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.LinkBox, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Stack, { direction: "row", align: "center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Stack, { justify: "end", spacing: 0, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Text, { textAlign: "right", children: "Next" }, void 0, !1, {
              fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
              lineNumber: 255,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Heading, { size: "md", textAlign: "right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              import_react14.LinkOverlay,
              {
                as: import_react13.Link,
                to: `/course/${params.courseId}/${params.unitId}/${+params.chapterId + 1}`,
                children: data.units[params.unitId].chapters[+params.chapterId + 1].title
              },
              void 0,
              !1,
              {
                fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
                lineNumber: 257,
                columnNumber: 12
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
              lineNumber: 256,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
            lineNumber: 254,
            columnNumber: 10
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Icon, { as: import_fa62.FaChevronRight }, void 0, !1, {
            fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
            lineNumber: 271,
            columnNumber: 10
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
          lineNumber: 253,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
          lineNumber: 252,
          columnNumber: 8
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
        lineNumber: 176,
        columnNumber: 6
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
      lineNumber: 100,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
      lineNumber: 99,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
    lineNumber: 97,
    columnNumber: 3
  }, this);
};
function KnowledgeCheck(chapterInfo) {
  chapterInfo = chapterInfo.chapterInfo;
  let [answers, setAnswers] = (0, import_react15.useState)(
    Array.from(chapterInfo.quiz, () => "")
  ), [alert, setAlert] = (0, import_react15.useState)(""), [percentCorrect, setPercentCorrect] = (0, import_react15.useState)(0), submitQuiz = () => {
    let newAnswers = [...answers];
    answers.forEach((answer, index) => {
      newAnswers[index] = chapterInfo.quiz[index].answer.toString() === answer || answer === "correct" ? "correct" : "incorrect";
    }), setAnswers(newAnswers);
    let percentCorrect2 = (Object.fromEntries([
      ...newAnswers.reduce(
        (map, key) => map.set(key, (map.get(key) || 0) + 1),
        /* @__PURE__ */ new Map()
      )
    ]).correct ? Object.fromEntries([
      ...newAnswers.reduce(
        (map, key) => map.set(key, (map.get(key) || 0) + 1),
        /* @__PURE__ */ new Map()
      )
    ]).correct : 0) / newAnswers.length;
    setPercentCorrect(percentCorrect2), setAlert(
      `${percentCorrect2 > 0.8 ? "Woohoo! " : ""}You got ${(percentCorrect2 * 100).toFixed(2)}% correct${percentCorrect2 > 0.8 ? "!" : ". Try again!"}`
    );
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Stack, { children: [
    chapterInfo.quiz.map((question, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      Question,
      {
        correct: answers[index] === "correct",
        incorrect: answers[index] === "incorrect",
        question,
        onChange: (newValue) => {
          let newAnswers = [...answers];
          newAnswers[index] = newValue, setAnswers(newAnswers);
        }
      },
      index,
      !1,
      {
        fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
        lineNumber: 331,
        columnNumber: 5
      },
      this
    )),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Button, { onClick: submitQuiz, children: "Submit" }, void 0, !1, {
      fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
      lineNumber: 343,
      columnNumber: 4
    }, this),
    alert.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      import_react14.Alert,
      {
        status: percentCorrect > 0.8 ? "success" : "error",
        borderRadius: "md",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.AlertIcon, {}, void 0, !1, {
            fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
            lineNumber: 350,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Text, { fontSize: { base: "sm", md: "md" }, children: alert }, void 0, !1, {
            fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
            lineNumber: 351,
            columnNumber: 7
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
        lineNumber: 346,
        columnNumber: 6
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
      lineNumber: 345,
      columnNumber: 5
    }, this) : ""
  ] }, void 0, !0, {
    fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
    lineNumber: 329,
    columnNumber: 3
  }, this);
}
function ChatBox(data) {
  let courseId = data.data.id, chat = data.data.chat, chapterId = data.data.chapter, unitId = data.data.unit;
  (!chat.examples || courseId != chat.courseId) && (chat.examples = []);
  let [value, setValue] = (0, import_react15.useState)("");
  return console.log("ENTEREDDDD"), (0, import_react15.useEffect)(() => {
    chat = localStorage.getItem("chat");
  }), (0, import_react15.useEffect)(() => {
    chat = localStorage.getItem("chat");
  }, [global_chat]), console.log("ABCDEF"), console.log(chat), /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Stack, { w: "100%", h: "100%", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Box, { height: "500px", overflow: "hidden", overflowY: "scroll", children: chat.messages.map((example) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Stack, { w: "100%", h: "100%", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.HStack, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Spacer, {}, void 0, !1, {
          fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
          lineNumber: 387,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          import_react14.Box,
          {
            width: "280px",
            backgroundColor: "blue.800",
            borderRadius: "8px",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              import_react14.Text,
              {
                wordBreak: "break-word",
                padding: "8px",
                overflowY: "hidden",
                children: example.input.content
              },
              void 0,
              !1,
              {
                fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
                lineNumber: 393,
                columnNumber: 9
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
            lineNumber: 388,
            columnNumber: 8
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Stack, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Spacer, {}, void 0, !1, {
            fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
            lineNumber: 402,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            import_react14.Avatar,
            {
              name: "user",
              size: "xs",
              src: "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
            },
            void 0,
            !1,
            {
              fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
              lineNumber: 403,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
          lineNumber: 401,
          columnNumber: 8
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
        lineNumber: 386,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.HStack, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          import_react14.Avatar,
          {
            name: "user",
            size: "xs",
            src: "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
          },
          void 0,
          !1,
          {
            fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
            lineNumber: 411,
            columnNumber: 8
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Stack, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          import_react14.Box,
          {
            width: "280px",
            backgroundColor: "blue.800",
            borderRadius: "8px",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                import_react14.Text,
                {
                  wordBreak: "break-word",
                  padding: "8px",
                  overflowY: "hidden",
                  children: example.output.content
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
                  lineNumber: 423,
                  columnNumber: 10
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Spacer, {}, void 0, !1, {
                fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
                lineNumber: 430,
                columnNumber: 10
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
            lineNumber: 418,
            columnNumber: 9
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
          lineNumber: 417,
          columnNumber: 8
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
        lineNumber: 410,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
      lineNumber: 385,
      columnNumber: 6
    }, this)) }, void 0, !1, {
      fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
      lineNumber: 383,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Spacer, {}, void 0, !1, {
      fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
      lineNumber: 437,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react13.Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Input, { type: "hidden", value: courseId, name: "courseId" }, void 0, !1, {
        fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
        lineNumber: 439,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Input, { type: "hidden", value: chapterId, name: "chapterId" }, void 0, !1, {
        fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
        lineNumber: 440,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Input, { type: "hidden", value: unitId, name: "unitId" }, void 0, !1, {
        fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
        lineNumber: 441,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Input, { type: "hidden", value: chat.examples, name: "chat" }, void 0, !1, {
        fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
        lineNumber: 442,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        import_react14.Textarea,
        {
          placeholder: "Send Message",
          value,
          onChange: (e) => setValue(e.currentTarget.value),
          name: "message",
          onKeyDown: (e) => {
            e.code == "Enter" && (e.preventDefault(), setValue(""), document.forms[0].submit());
          }
        },
        void 0,
        !1,
        {
          fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
          lineNumber: 443,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react14.Box, { height: "2px" }, void 0, !1, {
        fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
        lineNumber: 456,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
      lineNumber: 438,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/course.$courseId.$unitId.$chapterId.tsx",
    lineNumber: 382,
    columnNumber: 3
  }, this);
}
var course_courseId_unitId_chapterId_default = PostSlug;

// app/routes/course.$courseId.$unitId.tsx
var course_courseId_unitId_exports = {};
__export(course_courseId_unitId_exports, {
  default: () => PostSlug2,
  loader: () => loader2
});
var import_node3 = require("@remix-run/node"), import_react16 = require("@remix-run/react");
var import_react17 = require("@chakra-ui/react");
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), loader2 = async ({ params }) => {
  if ((await getCourse(params.courseId)).error)
    throw new Response(null, {
      status: 404,
      statusText: "Not Found"
    });
  return (0, import_node3.json)({
    params,
    data: await getCourse(params.courseId)
  });
};
function PostSlug2() {
  let { params, data } = (0, import_react16.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react17.Stack, { direction: "row", h: "100%", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(CourseSidebar_default, { data, params }, void 0, !1, {
      fileName: "app/routes/course.$courseId.$unitId.tsx",
      lineNumber: 29,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react17.Box, { overflowY: "scroll", p: 8, w: "100%", children: [
      "Course Name: ",
      data.title,
      ", Unit Name: ",
      data.units[0].title
    ] }, void 0, !0, {
      fileName: "app/routes/course.$courseId.$unitId.tsx",
      lineNumber: 31,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/course.$courseId.$unitId.tsx",
    lineNumber: 28,
    columnNumber: 3
  }, this);
}

// app/routes/course.$courseId.tsx
var course_courseId_exports = {};
__export(course_courseId_exports, {
  default: () => PostSlug3,
  loader: () => loader3
});
var import_node4 = require("@remix-run/node"), import_react18 = require("@remix-run/react");
var import_react19 = require("@chakra-ui/react");
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), loader3 = async ({ params }) => {
  if ((await getCourse(params.courseId)).error)
    throw new Response(null, {
      status: 404,
      statusText: "Not Found"
    });
  return (0, import_node4.json)({
    params,
    data: await getCourse(params.courseId)
  });
};
function PostSlug3() {
  let { params, data } = (0, import_react18.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react19.Stack, { direction: "row", h: "100%", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CourseSidebar_default, { data, params }, void 0, !1, {
      fileName: "app/routes/course.$courseId.tsx",
      lineNumber: 28,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react19.Box, { overflowY: "scroll", p: 8, w: "100%", children: [
      "Course Name: ",
      data.title
    ] }, void 0, !0, {
      fileName: "app/routes/course.$courseId.tsx",
      lineNumber: 29,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/course.$courseId.tsx",
    lineNumber: 27,
    columnNumber: 3
  }, this);
}

// app/routes/create.$courseId.tsx
var create_courseId_exports = {};
__export(create_courseId_exports, {
  action: () => action2,
  default: () => FinishCourse,
  loader: () => loader4
});
var import_react23 = require("@chakra-ui/react"), import_node5 = require("@remix-run/node"), import_react24 = require("@remix-run/react"), import_firestore4 = require("firebase/firestore"), import_mixpanel_browser = __toESM(require("mixpanel-browser")), import_react25 = require("react"), import_fa64 = require("react-icons/fa6");

// src/components/CreateCourseChapter.tsx
var import_react20 = require("@chakra-ui/react"), import_react21 = require("@remix-run/react"), import_react22 = require("react"), import_fa63 = require("react-icons/fa6"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), CreateCourseChapter = (0, import_react22.forwardRef)(
  ({
    chapterNumber,
    chapterTitle,
    searchQuery,
    onError,
    onComplete
  }, ref) => {
    let fetcher = (0, import_react21.useFetcher)();
    return (0, import_react22.useImperativeHandle)(ref, () => ({
      triggerLoad() {
        let formData = new FormData();
        formData.append("final_data", "false"), formData.append("chapter_title", chapterTitle), formData.append("youtube_search_query", searchQuery), fetcher.submit(formData, { method: "post" });
      }
    })), (0, import_react22.useEffect)(() => {
      fetcher.data && (fetcher.data.success == !1 ? onError() : onComplete(fetcher.data.chapterInfo));
    }, [fetcher]), /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      import_react20.Stack,
      {
        direction: "row",
        bg: fetcher.data ? fetcher.data.success ? "green.800" : "red.800" : "whiteAlpha.300",
        borderRadius: "lg",
        py: 2,
        px: 4,
        align: "center",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react20.Text, { fontWeight: "bold", children: [
            "Chapter ",
            chapterNumber + 1,
            ": ",
            chapterTitle
          ] }, void 0, !0, {
            fileName: "src/components/CreateCourseChapter.tsx",
            lineNumber: 63,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react20.Spacer, {}, void 0, !1, {
            fileName: "src/components/CreateCourseChapter.tsx",
            lineNumber: 66,
            columnNumber: 5
          }, this),
          fetcher.data ? fetcher.data.success ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react20.Icon, { boxSize: 5, as: import_fa63.FaCheck }, void 0, !1, {
            fileName: "src/components/CreateCourseChapter.tsx",
            lineNumber: 69,
            columnNumber: 7
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react20.Icon, { boxSize: 5, as: import_fa63.FaExclamation }, void 0, !1, {
            fileName: "src/components/CreateCourseChapter.tsx",
            lineNumber: 71,
            columnNumber: 7
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            import_react20.Spinner,
            {
              boxSize: 5,
              display: fetcher.state == "submitting" ? "block" : "none"
            },
            void 0,
            !1,
            {
              fileName: "src/components/CreateCourseChapter.tsx",
              lineNumber: 74,
              columnNumber: 6
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "src/components/CreateCourseChapter.tsx",
        lineNumber: 49,
        columnNumber: 4
      },
      this
    );
  }
), CreateCourseChapter_default = CreateCourseChapter;

// app/routes/create.$courseId.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), loader4 = async ({ params }) => {
  if ((await getCourse(params.courseId)).error)
    throw new Response(null, {
      status: 404,
      statusText: "Not Found"
    });
  return (0, import_node5.json)({
    params,
    data: await getCourse(params.courseId)
  });
}, action2 = async ({ request }) => {
  try {
    let formData = await request.formData();
    if (formData.get("final_data") == "true") {
      let courseInfo = JSON.parse(formData.get("courseInfo")), courseId = formData.get("courseId"), imageResponse = await (await fetch(
        `https://api.unsplash.com/search/photos?per_page=1&query=${courseInfo.title}&client_id=${process.env.UNSPLASH_API}`
      )).json();
      return courseInfo.image = imageResponse.results[0].urls.small_s3, await (0, import_firestore4.updateDoc)((0, import_firestore4.doc)(db, "courses", courseId), courseInfo), (0, import_node5.redirect)(`/course/${courseId}/0/0`);
    } else {
      let chapter_title = formData.get("chapter_title"), youtube_search_query = formData.get("youtube_search_query"), videoId = await searchYouTube(youtube_search_query), transcript = await getTranscript(videoId), combinedPrompt;
      transcript.success ? combinedPrompt = `
    Please perform the following two tasks based on the provided transcript:
    1. Summarize the transcript in 250 words or less. Do not mention sponsors or anything unrelated to the main topic. Do not introduce the summary with phrases like "This is a summary."
    2. Generate at least 3 general educational quiz questions based on the transcript. The questions should cover the entire content and not focus on specific details. The output should be an array of questions, with each question containing a question string, 4 answer choices in an array, and the index of the correct answer.

    Here is the transcript: ${transcript}

    Return your answer in the following JSON format:
    {
      "chapter_title": "${chapter_title}",
      "summary": "<summary>",
      "quiz": [
        {
          "question": "<question>",
          "choices": ["choice1", "choice2", "choice3", "choice4"],
          "answer": <index>
        },
        ...
      ]
    }` : combinedPrompt = `
    Please perform the following two tasks:
    1. Summarize the topic "${chapter_title}" in 250 words or less.
    2. Generate at least 3 general educational quiz questions related to the topic. The output should be an array of questions, with each question containing a question string, 4 answer choices in an array, and the index of the correct answer.

    Return your answer in the following JSON format:
    {
      "chapter_title": "${chapter_title}",
      "summary": "<summary>",
      "quiz": [
        {
          "question": "<question>",
          "choices": ["choice1", "choice2", "choice3", "choice4"],
          "answer": <index>
        },
        ...
      ]
    }`;
      let combinedResponse = await promptGemini(combinedPrompt);
      console.log(chapter_title, ` combinedResponse
`, combinedResponse);
      let parsedResponse = JSON.parse(combinedResponse), summary = parsedResponse.summary, quiz = parsedResponse.quiz;
      return console.log(chapter_title, ` summary
`, summary), console.log(chapter_title, ` quiz
`, quiz), {
        success: !0,
        chapterInfo: {
          title: chapter_title,
          video: videoId,
          summary,
          quiz
        }
      };
    }
  } catch (error) {
    return console.error(error), {
      success: !1
    };
  }
};
function FinishCourse() {
  let { params, data } = (0, import_react24.useLoaderData)(), [isErrored, setIsErrored] = (0, import_react25.useState)(!1), [isLoading, setIsLoading] = (0, import_react25.useState)([]), [finalData, setFinalData] = (0, import_react25.useState)([]), [allDone, setAllDone] = (0, import_react25.useState)(!1), elementsRefs = data.units.map(
    (unit) => unit.chapters.map(() => (0, import_react25.useRef)())
  );
  (0, import_react25.useEffect)(() => {
    finalData.length === 0 && setFinalData(
      data.units.map(
        (unit) => unit.chapters.map(() => ({}))
      )
    );
  }, [finalData]);
  let navigate = (0, import_react24.useNavigate)(), generateChapterInfos = (0, import_react25.useCallback)(() => {
    setIsErrored(!1), data.units.forEach((unit, i) => {
      unit.chapters.forEach((chapter, j) => {
        elementsRefs[i][j].current.triggerLoad(), setIsLoading((prev) => [...prev, `${i} ${j}`]);
      });
    });
  }, []), steps = [
    { title: "First", description: "Enter Units" },
    { title: "Second", description: "Confirm Chapters" },
    { title: "Third", description: "Save & Finish" }
  ], { activeStep, setActiveStep } = (0, import_react23.useSteps)({
    index: 1,
    count: steps.length
  }), onComplete = () => {
    setAllDone(!0), setActiveStep(2);
  }, fetcher = (0, import_react24.useFetcher)(), saveAndFinish = () => {
    import_mixpanel_browser.default.track("Save Course", {
      title: data.title
    });
    let newLoading = isLoading;
    newLoading.push("submitting"), setIsLoading(newLoading);
    let formattedData = {
      title: data.title,
      public: !0,
      completed: !0,
      units: [
        ...data.units.map((unit, i) => ({
          title: unit.title,
          chapters: [
            ...unit.chapters.map(
              (chapter, j) => finalData[i][j]
            )
          ]
        }))
      ]
    }, formData = new FormData();
    formData.append("final_data", "true"), formData.append("courseId", params.courseId), formData.append("courseInfo", JSON.stringify(formattedData)), fetcher.submit(formData, { method: "post" });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react23.Stack, { margin: "auto", maxW: "xl", p: 8, h: "calc(100vh - 90px)", spacing: 4, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react23.Stepper, { size: "sm", index: activeStep, children: steps.map((step, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react23.Step, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react23.Stack, { align: "center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react23.StepIndicator, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          import_react23.StepStatus,
          {
            complete: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react23.StepIcon, {}, void 0, !1, {
              fileName: "app/routes/create.$courseId.tsx",
              lineNumber: 251,
              columnNumber: 20
            }, this),
            incomplete: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react23.StepNumber, {}, void 0, !1, {
              fileName: "app/routes/create.$courseId.tsx",
              lineNumber: 252,
              columnNumber: 22
            }, this),
            active: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react23.StepNumber, {}, void 0, !1, {
              fileName: "app/routes/create.$courseId.tsx",
              lineNumber: 253,
              columnNumber: 18
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/create.$courseId.tsx",
            lineNumber: 250,
            columnNumber: 9
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/create.$courseId.tsx",
          lineNumber: 249,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react23.Box, { textAlign: "center", flexShrink: "0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react23.StepTitle, { children: step.description }, void 0, !1, {
          fileName: "app/routes/create.$courseId.tsx",
          lineNumber: 258,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/create.$courseId.tsx",
          lineNumber: 257,
          columnNumber: 8
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/create.$courseId.tsx",
        lineNumber: 248,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react23.StepSeparator, {}, void 0, !1, {
        fileName: "app/routes/create.$courseId.tsx",
        lineNumber: 262,
        columnNumber: 7
      }, this)
    ] }, index, !0, {
      fileName: "app/routes/create.$courseId.tsx",
      lineNumber: 247,
      columnNumber: 6
    }, this)) }, void 0, !1, {
      fileName: "app/routes/create.$courseId.tsx",
      lineNumber: 245,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react23.Divider, {}, void 0, !1, {
      fileName: "app/routes/create.$courseId.tsx",
      lineNumber: 267,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react23.Stack, { spacing: 0, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        import_react23.Text,
        {
          color: "whiteAlpha.600",
          fontWeight: "semibold",
          letterSpacing: "wide",
          fontSize: "xs",
          textTransform: "uppercase",
          children: "Course Name:"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/create.$courseId.tsx",
          lineNumber: 270,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react23.Heading, { size: "xl", children: data.title }, void 0, !1, {
        fileName: "app/routes/create.$courseId.tsx",
        lineNumber: 279,
        columnNumber: 5
      }, this),
      "D"
    ] }, void 0, !0, {
      fileName: "app/routes/create.$courseId.tsx",
      lineNumber: 269,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react23.Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react23.Alert, { status: "info", borderRadius: "lg", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react23.AlertIcon, {}, void 0, !1, {
        fileName: "app/routes/create.$courseId.tsx",
        lineNumber: 284,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react23.Text, { fontSize: { base: "sm", md: "md" }, children: 'We generated chapters for each of your units. Look over them and then click the "Finish Course Generation" button to confirm and continue.' }, void 0, !1, {
        fileName: "app/routes/create.$courseId.tsx",
        lineNumber: 285,
        columnNumber: 6
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/create.$courseId.tsx",
      lineNumber: 283,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/create.$courseId.tsx",
      lineNumber: 282,
      columnNumber: 4
    }, this),
    data.units.map((unit, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react23.Stack, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react23.Stack, { spacing: 0, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          import_react23.Text,
          {
            color: "whiteAlpha.600",
            fontWeight: "semibold",
            letterSpacing: "wide",
            fontSize: "xs",
            textTransform: "uppercase",
            children: [
              "Unit ",
              i + 1,
              ":"
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/create.$courseId.tsx",
            lineNumber: 296,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react23.Heading, { size: "md", children: unit.title }, void 0, !1, {
          fileName: "app/routes/create.$courseId.tsx",
          lineNumber: 305,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/create.$courseId.tsx",
        lineNumber: 295,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react23.Stack, { spacing: 2, children: unit.chapters.map((chapter, j) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        CreateCourseChapter_default,
        {
          chapterTitle: chapter.chapter_title,
          chapterNumber: j,
          searchQuery: chapter.youtube_search_query,
          ref: elementsRefs[i][j],
          onError: () => {
            setIsErrored(!0), setIsLoading(
              (prev) => prev.splice(prev.indexOf(`${i} ${j}`), 1)
            );
          },
          onComplete: (chapterInfo) => {
            let newLoading = isLoading;
            newLoading.indexOf(`${i} ${j}`) !== -1 && (newLoading.splice(newLoading.indexOf(`${i} ${j}`), 1), setIsLoading(newLoading));
            let updatedData = finalData;
            updatedData[i][j] = chapterInfo, setFinalData(updatedData), isLoading.length == 0 && !allDone && onComplete();
          }
        },
        `${i}${j}`,
        !1,
        {
          fileName: "app/routes/create.$courseId.tsx",
          lineNumber: 309,
          columnNumber: 8
        },
        this
      )) }, void 0, !1, {
        fileName: "app/routes/create.$courseId.tsx",
        lineNumber: 307,
        columnNumber: 6
      }, this)
    ] }, i, !0, {
      fileName: "app/routes/create.$courseId.tsx",
      lineNumber: 294,
      columnNumber: 5
    }, this)),
    isErrored && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react23.Alert, { minH: 100, status: "error", borderRadius: "lg", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react23.AlertIcon, {}, void 0, !1, {
        fileName: "app/routes/create.$courseId.tsx",
        lineNumber: 343,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react23.Text, { fontSize: { base: "sm", md: "md" }, children: 'An error occurred while creating one of your chapters. Click the "Contact Us" button to report the issue.' }, void 0, !1, {
        fileName: "app/routes/create.$courseId.tsx",
        lineNumber: 344,
        columnNumber: 6
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/create.$courseId.tsx",
      lineNumber: 342,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react23.Stack, { direction: "row", pb: 8, align: "center", spacing: 4, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react23.Divider, { orientation: "horizontal" }, void 0, !1, {
        fileName: "app/routes/create.$courseId.tsx",
        lineNumber: 352,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react23.Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        import_react23.Button,
        {
          leftIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_fa64.FaChevronLeft, {}, void 0, !1, {
            fileName: "app/routes/create.$courseId.tsx",
            lineNumber: 355,
            columnNumber: 17
          }, this),
          onClick: () => {
            navigate(-1);
          },
          children: "Back"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/create.$courseId.tsx",
          lineNumber: 354,
          columnNumber: 6
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/create.$courseId.tsx",
        lineNumber: 353,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react23.Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        import_react23.Button,
        {
          rightIcon: isErrored ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_fa64.FaEnvelope, {}, void 0, !1, {
            fileName: "app/routes/create.$courseId.tsx",
            lineNumber: 367,
            columnNumber: 9
          }, this) : allDone ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_fa64.FaCheck, {}, void 0, !1, {
            fileName: "app/routes/create.$courseId.tsx",
            lineNumber: 369,
            columnNumber: 9
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_fa64.FaChevronRight, {}, void 0, !1, {
            fileName: "app/routes/create.$courseId.tsx",
            lineNumber: 371,
            columnNumber: 9
          }, this),
          onClick: isErrored ? () => navigate("/contact") : allDone ? saveAndFinish : generateChapterInfos,
          colorScheme: isErrored ? "red" : allDone ? "green" : "blue",
          isLoading: isLoading.length > 0,
          loadingText: allDone ? "Saving" : "Generating",
          children: isErrored ? "Contact Us" : allDone ? "Save & Finish" : "Generate"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/create.$courseId.tsx",
          lineNumber: 364,
          columnNumber: 6
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/create.$courseId.tsx",
        lineNumber: 363,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react23.Divider, { orientation: "horizontal" }, void 0, !1, {
        fileName: "app/routes/create.$courseId.tsx",
        lineNumber: 388,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/create.$courseId.tsx",
      lineNumber: 351,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/create.$courseId.tsx",
    lineNumber: 244,
    columnNumber: 3
  }, this);
}

// app/routes/contact.tsx
var contact_exports = {};
__export(contact_exports, {
  action: () => action3,
  default: () => Home
});
var import_react26 = require("@chakra-ui/react"), import_react27 = require("@remix-run/react"), import_node6 = require("@remix-run/node"), import_firestore5 = require("firebase/firestore");
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
async function action3({ request }) {
  try {
    let formData = await request.formData();
    return await (0, import_firestore5.addDoc)((0, import_firestore5.collection)(db, "messages"), {
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message")
    }), (0, import_node6.json)(
      { message: "Message sent!" },
      {
        status: 200
      }
    );
  } catch (error) {
    return console.error(error), (0, import_node6.json)(
      {
        error: "Sorry, we couldn't send your message. Try emailing us at ping.mithil@gmail.com instead."
      },
      {
        status: 500
      }
    );
  }
}
function Home() {
  let navigation = (0, import_react27.useNavigation)(), actionData = (0, import_react27.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react27.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react26.Stack, { maxW: "xl", justify: "center", margin: "auto", p: 8, spacing: 4, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      import_react26.Heading,
      {
        as: "h1",
        fontWeight: "black",
        size: { base: "3xl", md: "4xl" },
        textAlign: "center",
        children: "Contact Us"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/contact.tsx",
        lineNumber: 59,
        columnNumber: 5
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react26.Alert, { status: "info", borderRadius: "lg", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react26.AlertIcon, {}, void 0, !1, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 69,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react26.Text, { fontSize: { base: "sm", md: "md" }, children: "We'll reply to your message as soon as possible!" }, void 0, !1, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 70,
        columnNumber: 6
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 68,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react26.Stack, { spacing: { base: 2, md: 4 }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        import_react26.Stack,
        {
          direction: ["column", "row"],
          align: { base: "start", md: "center" },
          justify: "space-between",
          spacing: { base: 1, md: 0 },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react26.Text, { fontWeight: "bold", fontSize: { base: "lg", md: "xl" }, children: "Email:" }, void 0, !1, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 82,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
              import_react26.Input,
              {
                maxW: "sm",
                disabled: navigation.state === "submitting",
                name: "email",
                type: "email",
                isRequired: !0,
                size: "lg"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/contact.tsx",
                lineNumber: 85,
                columnNumber: 7
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/contact.tsx",
          lineNumber: 76,
          columnNumber: 6
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        import_react26.Stack,
        {
          direction: ["column", "row"],
          align: { base: "start", md: "center" },
          justify: "space-between",
          spacing: { base: 1, md: 0 },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react26.Text, { fontWeight: "bold", fontSize: { base: "lg", md: "xl" }, children: "Subject:" }, void 0, !1, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 100,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
              import_react26.Input,
              {
                maxW: "sm",
                disabled: navigation.state === "submitting",
                name: "subject",
                isRequired: !0,
                size: "lg"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/contact.tsx",
                lineNumber: 103,
                columnNumber: 7
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/contact.tsx",
          lineNumber: 94,
          columnNumber: 6
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        import_react26.Stack,
        {
          direction: ["column", "row"],
          align: "start",
          justify: "space-between",
          spacing: { base: 1, md: 0 },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react26.Text, { fontWeight: "bold", fontSize: { base: "lg", md: "xl" }, children: "Message:" }, void 0, !1, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 117,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
              import_react26.Textarea,
              {
                maxW: "sm",
                disabled: navigation.state === "submitting",
                name: "message",
                isRequired: !0,
                size: "lg"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/contact.tsx",
                lineNumber: 120,
                columnNumber: 7
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/contact.tsx",
          lineNumber: 111,
          columnNumber: 6
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 75,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react26.Stack, { spacing: 4, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        import_react26.Button,
        {
          colorScheme: "blue",
          isLoading: navigation.state === "submitting",
          loadingText: "Sending...",
          type: "submit",
          children: "Send!"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/contact.tsx",
          lineNumber: 131,
          columnNumber: 6
        },
        this
      ),
      actionData && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        import_react26.Alert,
        {
          borderRadius: "lg",
          status: actionData.error ? "error" : "success",
          variant: "subtle",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react26.AlertIcon, { boxSize: "40px", mr: 0 }, void 0, !1, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 150,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react26.AlertTitle, { mt: 4, mb: 1, fontSize: "xl", children: actionData.error ? "Something went wrong!" : "Success!" }, void 0, !1, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 151,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react26.AlertDescription, { maxWidth: "sm", children: actionData.error ? actionData.error : "Your message was sent. We will respond to your message as soon as possible!" }, void 0, !1, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 154,
              columnNumber: 8
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/contact.tsx",
          lineNumber: 141,
          columnNumber: 7
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 130,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 58,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 57,
    columnNumber: 3
  }, this);
}

// app/routes/gallery.tsx
var gallery_exports = {};
__export(gallery_exports, {
  default: () => PostSlug4,
  loader: () => loader5
});
var import_react30 = require("@chakra-ui/react");
var import_react31 = require("@remix-run/react");

// src/components/GalleryResult.tsx
var import_react28 = require("@chakra-ui/react"), import_react29 = require("@remix-run/react"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function titleCase(st) {
  return st.toLowerCase().split(" ").reduce(
    (s, c) => s + (c.charAt(0).toUpperCase() + c.slice(1) + " "),
    ""
  );
}
function GalleryResult({
  courseView,
  courseId
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react28.WrapItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    import_react28.LinkBox,
    {
      w: "xs",
      minH: "sm",
      borderWidth: "1px",
      borderRadius: "lg",
      boxShadow: "lg",
      display: "flex",
      flexDirection: "column",
      overflow: "clip",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react28.Stack, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          import_react28.Image,
          {
            src: courseView.image,
            fit: "cover",
            alt: "Course Pic",
            h: 200,
            fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react28.Center, { h: 200, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react28.Spinner, {}, void 0, !1, {
              fileName: "src/components/GalleryResult.tsx",
              lineNumber: 56,
              columnNumber: 9
            }, this) }, void 0, !1, {
              fileName: "src/components/GalleryResult.tsx",
              lineNumber: 55,
              columnNumber: 8
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "src/components/GalleryResult.tsx",
            lineNumber: 49,
            columnNumber: 6
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react28.Stack, { py: 2, px: 4, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react28.Heading, { size: "md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react28.LinkOverlay, { as: import_react29.Link, to: `/course/${courseId}/0/0`, children: courseView.title.charAt(0).toUpperCase() === courseView.title.charAt(0) ? courseView.title : titleCase(courseView.title) }, void 0, !1, {
            fileName: "src/components/GalleryResult.tsx",
            lineNumber: 62,
            columnNumber: 8
          }, this) }, void 0, !1, {
            fileName: "src/components/GalleryResult.tsx",
            lineNumber: 61,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react28.Divider, { borderColor: "gray.400" }, void 0, !1, {
            fileName: "src/components/GalleryResult.tsx",
            lineNumber: 69,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react28.Stack, { spacing: 1, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
              import_react28.Box,
              {
                color: "gray.500",
                fontWeight: "semibold",
                letterSpacing: "wide",
                fontSize: "xs",
                textTransform: "uppercase",
                children: "units"
              },
              void 0,
              !1,
              {
                fileName: "src/components/GalleryResult.tsx",
                lineNumber: 72,
                columnNumber: 8
              },
              this
            ),
            courseView.units.map((unit, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react28.Link, { as: import_react29.Link, to: `/course/${courseId}/${i}/0`, children: unit.title }, void 0, !1, {
              fileName: "src/components/GalleryResult.tsx",
              lineNumber: 82,
              columnNumber: 9
            }, this))
          ] }, void 0, !0, {
            fileName: "src/components/GalleryResult.tsx",
            lineNumber: 71,
            columnNumber: 7
          }, this)
        ] }, void 0, !0, {
          fileName: "src/components/GalleryResult.tsx",
          lineNumber: 60,
          columnNumber: 6
        }, this)
      ] }, void 0, !0, {
        fileName: "src/components/GalleryResult.tsx",
        lineNumber: 48,
        columnNumber: 5
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "src/components/GalleryResult.tsx",
      lineNumber: 38,
      columnNumber: 4
    },
    this
  ) }, void 0, !1, {
    fileName: "src/components/GalleryResult.tsx",
    lineNumber: 37,
    columnNumber: 3
  }, this);
}

// app/routes/gallery.tsx
var import_fa = require("react-icons/fa"), import_react32 = require("react"), import_fuse = __toESM(require("fuse.js")), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), loader5 = async (query2) => await getAllCourses();
function PostSlug4() {
  let coursesData = (0, import_react31.useLoaderData)(), fuse = new import_fuse.default(coursesData, {
    keys: ["id", "data.title", "data.units.title"],
    threshold: 0.4
  }), [data, setData] = (0, import_react32.useState)(coursesData);
  function handleChange(e) {
    e.target.value == "" ? setData(coursesData) : setData(fuse.search(e.target.value));
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react30.Stack, { spacing: 8, py: 8, px: 4, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react30.HStack, { spacing: 2, px: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react30.InputGroup, { size: "lg", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react30.InputLeftElement, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react30.Icon, { as: import_fa.FaSearch }, void 0, !1, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 49,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 48,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        import_react30.Input,
        {
          onChange: handleChange,
          name: "search",
          pr: "6rem",
          type: "text",
          placeholder: "Search by keyword, title, or units"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/gallery.tsx",
          lineNumber: 51,
          columnNumber: 6
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/gallery.tsx",
      lineNumber: 47,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/gallery.tsx",
      lineNumber: 46,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      import_react30.Divider,
      {
        borderColor: "white.400",
        borderWidth: "1px",
        borderRadius: "0.5px",
        w: "90%",
        alignSelf: "center"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 60,
        columnNumber: 4
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react30.Wrap, { spacing: 4, justify: "center", children: data.map((course, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      GalleryResult,
      {
        courseView: course.data ? course.data : course.item.data,
        courseId: course.id ? course.id : course.item.id
      },
      index,
      !1,
      {
        fileName: "app/routes/gallery.tsx",
        lineNumber: 69,
        columnNumber: 6
      },
      this
    )) }, void 0, !1, {
      fileName: "app/routes/gallery.tsx",
      lineNumber: 67,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/gallery.tsx",
    lineNumber: 45,
    columnNumber: 3
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  action: () => action4,
  default: () => Home2
});

// src/components/Unit.tsx
var import_react33 = require("@chakra-ui/react"), import_react34 = require("react"), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function Unit({ index, onChange, disabled }) {
  let [value, setValue] = (0, import_react34.useState)("");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
    import_react33.Stack,
    {
      direction: ["column", "row"],
      align: { base: "start", md: "center" },
      justify: "space-between",
      spacing: { base: 1, md: 0 },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react33.Text, { fontSize: { base: "lg", md: "xl" }, fontWeight: "bold", children: [
          "Unit ",
          index + 1,
          ":"
        ] }, void 0, !0, {
          fileName: "src/components/Unit.tsx",
          lineNumber: 20,
          columnNumber: 4
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          import_react33.Input,
          {
            maxW: "sm",
            disabled,
            isRequired: !0,
            name: "unit",
            size: "lg",
            placeholder: index == 0 ? "Axis Powers" : index == 1 ? "Allied Powers" : index == 2 ? "Major Battles" : "Unit Title",
            value,
            onChange: (e) => {
              setValue(e.target.value), onChange(e.target.value);
            }
          },
          void 0,
          !1,
          {
            fileName: "src/components/Unit.tsx",
            lineNumber: 23,
            columnNumber: 4
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "src/components/Unit.tsx",
      lineNumber: 14,
      columnNumber: 3
    },
    this
  );
}

// app/routes/index.tsx
var import_react35 = require("@chakra-ui/react"), import_react36 = require("@remix-run/react"), import_react37 = require("react"), import_fa65 = require("react-icons/fa6"), import_node7 = require("@remix-run/node");
var import_mixpanel_browser2 = __toESM(require("mixpanel-browser")), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
async function action4({ request }) {
  try {
    let formData = await request.formData(), response = await createChapters(
      formData.get("title"),
      formData.getAll("unit")
    );
    return (0, import_node7.redirect)(`/create/${response.courseId}/`);
  } catch (error) {
    return console.error(error), (0, import_node7.json)(
      { message: "Sorry, we couldn't create the project" },
      {
        status: 500
      }
    );
  }
}
function Home2() {
  let [units, setUnits] = (0, import_react37.useState)(["", "", ""]), [title, setTitle] = (0, import_react37.useState)(""), navigation = (0, import_react36.useNavigation)(), actionData = (0, import_react36.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    import_react36.Form,
    {
      onSubmit: () => {
        import_mixpanel_browser2.default.track("Submit Create Course Form", {
          title
        });
      },
      method: "post",
      action: "/?index",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react35.Stack, { maxW: "xl", justify: "center", margin: "auto", p: 8, spacing: 4, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          import_react35.Heading,
          {
            as: "h1",
            fontWeight: "black",
            size: { base: "xl", md: "2xl" },
            textAlign: "center",
            children: "Create a Course"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/index.tsx",
            lineNumber: 59,
            columnNumber: 5
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react35.Alert, { status: "info", borderRadius: "lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react35.AlertIcon, {}, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 69,
            columnNumber: 6
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react35.Text, { fontSize: { base: "sm", md: "md" }, children: `Enter in a course title, or what you want to learn about. Then enter a list of units, which are the specifics you want to learn. Hit "Let's Go" and our AI will generate a course for you!` }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 70,
            columnNumber: 6
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 68,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react35.Stack, { spacing: { base: 2, md: 4 }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
            import_react35.Stack,
            {
              direction: ["column", "row"],
              align: { base: "start", md: "center" },
              justify: "space-between",
              spacing: { base: 1, md: 0 },
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react35.Text, { fontWeight: "bold", fontSize: { base: "lg", md: "xl" }, children: "Title:" }, void 0, !1, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 84,
                  columnNumber: 7
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                  import_react35.Input,
                  {
                    maxW: "sm",
                    disabled: navigation.state === "submitting",
                    name: "title",
                    isRequired: !0,
                    size: "lg",
                    placeholder: "History of WWII",
                    onChange: (e) => setTitle(e.target.value),
                    value: title
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 87,
                    columnNumber: 7
                  },
                  this
                )
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/index.tsx",
              lineNumber: 78,
              columnNumber: 6
            },
            this
          ),
          units.map((u, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
            Unit,
            {
              index,
              disabled: navigation.state === "submitting",
              onChange: (e) => {
                let newUnits = [...units];
                newUnits[index] = e, setUnits(newUnits);
              }
            },
            index,
            !1,
            {
              fileName: "app/routes/index.tsx",
              lineNumber: 99,
              columnNumber: 7
            },
            this
          ))
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 77,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react35.Stack, { direction: "row", align: "center", spacing: 4, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react35.Divider, { orientation: "horizontal" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 113,
            columnNumber: 6
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react35.Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
            import_react35.Button,
            {
              leftIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_fa65.FaPlus, {}, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 116,
                columnNumber: 18
              }, this),
              onClick: () => setUnits((units2) => {
                let newUnits = [...units2];
                return newUnits.push(""), newUnits;
              }),
              children: "Add Unit"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/index.tsx",
              lineNumber: 115,
              columnNumber: 7
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 114,
            columnNumber: 6
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react35.Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
            import_react35.Button,
            {
              leftIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_fa65.FaTrash, {}, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 130,
                columnNumber: 18
              }, this),
              onClick: () => {
                let newUnits = [...units];
                newUnits.pop(), setUnits(newUnits);
              },
              children: "Delete Unit"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/index.tsx",
              lineNumber: 129,
              columnNumber: 7
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 128,
            columnNumber: 6
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react35.Divider, { orientation: "horizontal" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 140,
            columnNumber: 6
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 112,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react35.Stack, { spacing: 4, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
            import_react35.Button,
            {
              colorScheme: "blue",
              isLoading: navigation.state === "submitting",
              loadingText: "Creating Your Course...",
              type: "submit",
              children: "Let's Go!"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/index.tsx",
              lineNumber: 144,
              columnNumber: 6
            },
            this
          ),
          (actionData == null ? void 0 : actionData.message) && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react35.Alert, { status: "error", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react35.AlertIcon, {}, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 155,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react35.AlertTitle, { children: "Something went wrong!" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 156,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react35.AlertDescription, { children: [
              "Error: ",
              actionData.message
            ] }, void 0, !0, {
              fileName: "app/routes/index.tsx",
              lineNumber: 157,
              columnNumber: 8
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 154,
            columnNumber: 7
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 143,
          columnNumber: 5
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 58,
        columnNumber: 4
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/index.tsx",
      lineNumber: 49,
      columnNumber: 3
    },
    this
  );
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "3f437418", entry: { module: "/build/entry.client-2HN2Y4KR.js", imports: ["/build/_shared/chunk-DGTLSPJW.js", "/build/_shared/chunk-KQ632LOB.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-IE6UCAQG.js", imports: ["/build/_shared/chunk-LENQ6WN7.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/contact": { id: "routes/contact", parentId: "root", path: "contact", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-5WNO4XL6.js", imports: ["/build/_shared/chunk-WWDZYVVF.js", "/build/_shared/chunk-OHKIDMYG.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/course.$courseId": { id: "routes/course.$courseId", parentId: "root", path: "course/:courseId", index: void 0, caseSensitive: void 0, module: "/build/routes/course.$courseId-T3LQ3JOG.js", imports: ["/build/_shared/chunk-PGTZQGSQ.js", "/build/_shared/chunk-UKK3ANHQ.js", "/build/_shared/chunk-HTU5OTNK.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/course.$courseId.$unitId": { id: "routes/course.$courseId.$unitId", parentId: "root", path: "course/:courseId/:unitId", index: void 0, caseSensitive: void 0, module: "/build/routes/course.$courseId.$unitId-SFWWKSEG.js", imports: ["/build/_shared/chunk-PGTZQGSQ.js", "/build/_shared/chunk-UKK3ANHQ.js", "/build/_shared/chunk-HTU5OTNK.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/course.$courseId.$unitId.$chapterId": { id: "routes/course.$courseId.$unitId.$chapterId", parentId: "root", path: "course/:courseId/:unitId/:chapterId", index: void 0, caseSensitive: void 0, module: "/build/routes/course.$courseId.$unitId.$chapterId-H3B5ZL2W.js", imports: ["/build/_shared/chunk-PGTZQGSQ.js", "/build/_shared/chunk-UKK3ANHQ.js", "/build/_shared/chunk-OHKIDMYG.js", "/build/_shared/chunk-HTU5OTNK.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/create.$courseId": { id: "routes/create.$courseId", parentId: "root", path: "create/:courseId", index: void 0, caseSensitive: void 0, module: "/build/routes/create.$courseId-ZKVFZFAM.js", imports: ["/build/_shared/chunk-UKK3ANHQ.js", "/build/_shared/chunk-WWDZYVVF.js", "/build/_shared/chunk-OHKIDMYG.js", "/build/_shared/chunk-HTU5OTNK.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/gallery": { id: "routes/gallery", parentId: "root", path: "gallery", index: void 0, caseSensitive: void 0, module: "/build/routes/gallery-W4TWLIJW.js", imports: ["/build/_shared/chunk-HTU5OTNK.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-BRDFJICC.js", imports: ["/build/_shared/chunk-UKK3ANHQ.js", "/build/_shared/chunk-HTU5OTNK.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-3F437418.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/course.$courseId.$unitId.$chapterId": {
    id: "routes/course.$courseId.$unitId.$chapterId",
    parentId: "root",
    path: "course/:courseId/:unitId/:chapterId",
    index: void 0,
    caseSensitive: void 0,
    module: course_courseId_unitId_chapterId_exports
  },
  "routes/course.$courseId.$unitId": {
    id: "routes/course.$courseId.$unitId",
    parentId: "root",
    path: "course/:courseId/:unitId",
    index: void 0,
    caseSensitive: void 0,
    module: course_courseId_unitId_exports
  },
  "routes/course.$courseId": {
    id: "routes/course.$courseId",
    parentId: "root",
    path: "course/:courseId",
    index: void 0,
    caseSensitive: void 0,
    module: course_courseId_exports
  },
  "routes/create.$courseId": {
    id: "routes/create.$courseId",
    parentId: "root",
    path: "create/:courseId",
    index: void 0,
    caseSensitive: void 0,
    module: create_courseId_exports
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: contact_exports
  },
  "routes/gallery": {
    id: "routes/gallery",
    parentId: "root",
    path: "gallery",
    index: void 0,
    caseSensitive: void 0,
    module: gallery_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
