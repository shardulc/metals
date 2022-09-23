"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4782],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,h=u["".concat(s,".").concat(d)]||u[d]||c[d]||l;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1344:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var a=n(7462),i=n(3366),l=(n(7294),n(3905)),o=["components"],r={id:"sublime",title:"Sublime Text"},s=void 0,p={unversionedId:"editors/sublime",id:"editors/sublime",title:"Sublime Text",description:"Metals works with Sublime Text (build 4000 or later) thanks to the",source:"@site/target/docs/editors/sublime.md",sourceDirName:"editors",slug:"/editors/sublime",permalink:"/metals/docs/editors/sublime",editUrl:"https://github.com/scalameta/metals/edit/main/docs/editors/sublime.md",tags:[],version:"current",frontMatter:{id:"sublime",title:"Sublime Text"},sidebar:"docs",previous:{title:"Vim",permalink:"/metals/docs/editors/vim"},next:{title:"Emacs",permalink:"/metals/docs/editors/emacs"}},m=[{value:"Requirements",id:"requirements",children:[],level:2},{value:"Installing the plugins",id:"installing-the-plugins",children:[],level:2},{value:"Importing a build",id:"importing-a-build",children:[],level:2},{value:"Server logs",id:"server-logs",children:[],level:2},{value:"Find symbol references",id:"find-symbol-references",children:[],level:2},{value:"Goto symbol in workspace",id:"goto-symbol-in-workspace",children:[],level:2},{value:"Manually trigger build import",id:"manually-trigger-build-import",children:[],level:2},{value:"Tweaking Sublime Text for a better productivity",id:"tweaking-sublime-text-for-a-better-productivity",children:[{value:"Optional LSP client tweaks",id:"optional-lsp-client-tweaks",children:[],level:3},{value:"Additional key mappings",id:"additional-key-mappings",children:[{value:"Keymaping for formatting document via scalafmt",id:"keymaping-for-formatting-document-via-scalafmt",children:[],level:4}],level:3},{value:"Add key mapping for Goto symbol in workspace",id:"add-key-mapping-for-goto-symbol-in-workspace",children:[],level:3},{value:"Enabling auto-import on completion",id:"enabling-auto-import-on-completion",children:[],level:3}],level:2},{value:"Using latest Metals SNAPSHOT",id:"using-latest-metals-snapshot",children:[],level:2},{value:"Files and Directories to include in your Gitignore",id:"files-and-directories-to-include-in-your-gitignore",children:[],level:2},{value:"Worksheets",id:"worksheets",children:[{value:"Getting started with Worksheets",id:"getting-started-with-worksheets",children:[],level:3},{value:"Evaluations",id:"evaluations",children:[],level:3},{value:"Using dependencies in worksheets",id:"using-dependencies-in-worksheets",children:[],level:3}],level:2},{value:"Running scalafix rules",id:"running-scalafix-rules",children:[],level:2}],c={toc:m};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Metals works with Sublime Text (build 4000 or later) thanks to the\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/sublimelsp/LSP"},"sublimelsp/LSP")," and ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals-sublime"},"scalameta/metals-sublime")," plugins."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/vJKP0T3.gif",alt:"Sublime Text demo"})),(0,l.kt)("h2",{id:"requirements"},"Requirements"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Java 8, 11, 17 provided by OpenJDK or Oracle"),". Eclipse OpenJ9 is not\nsupported, please make sure the ",(0,l.kt)("inlineCode",{parentName:"p"},"JAVA_HOME")," environment variable\npoints to a valid Java 8, 11 or 17 installation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"macOS, Linux or Windows"),". Metals is developed on many operating systems and\nevery PR is tested on Ubuntu, Windows and MacOS."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Scala 2.13, 2.12, 2.11 and Scala 3"),". Metals supports these Scala versions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Scala 2.13"),":\n2.13.9, 2.13.8, 2.13.7, 2.13.6, 2.13.5, 2.13.4, 2.13.3, 2.13.2, 2.13.1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Scala 2.12"),":\n2.12.17, 2.12.16, 2.12.15, 2.12.14, 2.12.13, 2.12.12, 2.12.11, 2.12.10, 2.12.9")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Scala 2.11"),":\n2.11.12")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Scala 3"),":\n3.2.1-RC2, 3.2.1-RC1, 3.2.0, 3.2.0-RC4, 3.2.0-RC3, 3.1.3, 3.1.2, 3.1.1, 3.1.0, 3.0.2, 3.0.1, 3.0.0"))),(0,l.kt)("p",null,"Note that 2.11.x support is deprecated and it will be removed in future releases.\nIt's recommended to upgrade to Scala 2.12 or Scala 2.13"),(0,l.kt)("h2",{id:"installing-the-plugins"},"Installing the plugins"),(0,l.kt)("p",null,"Install the following packages:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/sublimelsp/LSP"},"sublimelsp/LSP"),": Language Server Protocol support for Sublime Text.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"Command Palette (Cmd + Shift + P) > Install package > LSP"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals-sublime"},"scalameta/metals-sublime"),": For automatic installation of metals and custom commands.\n",(0,l.kt)("inlineCode",{parentName:"p"},"Command Palette (Cmd + Shift + P) > Install package > LSP-metals")))),(0,l.kt)("p",null,"Finally restart sublime text."),(0,l.kt)("p",null,'Next, open "Preferences > Key Binding" and register ',(0,l.kt)("inlineCode",{parentName:"p"},"F12")," to trigger goto\ndefinition."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  // ...\n  {\n    "keys": ["f12"],\n    "command": "lsp_symbol_definition"\n  }\n]\n')),(0,l.kt)("h2",{id:"importing-a-build"},"Importing a build"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/eUk30Zy.png",alt:"Build Import"})),(0,l.kt)("p",null,"Open Sublime in the base directory of your Scala project and it will then prompt you to import the build as long as you're using one of the ",(0,l.kt)("a",{parentName:"p",href:"https://scalameta.org/metals/docs/build-tools/overview.html"},"supported build tools"),'. Click "Import build" to start the installation step.'),(0,l.kt)("p",null,"This starts the Metal language server but no functionality will work yet because the\nbuild has not been imported. "),(0,l.kt)("p",null,"This step can take a long time, especially the first time you run it in a new\nworkspace. The exact time depends on the complexity of the build and if the library dependencies are cached or need to be downloaded. For example, this step can take anywhere from 10 seconds in small cached builds up to 10-15 minutes in large un-cached builds."),(0,l.kt)("h2",{id:"server-logs"},"Server logs"),(0,l.kt)("p",null,"For more detailed information about what is happening behind the scenes during\n",(0,l.kt)("inlineCode",{parentName:"p"},"sbt bloopInstall")," run ",(0,l.kt)("inlineCode",{parentName:"p"},"lsp toggle server panel")," in the command palette. You can optionally add key binding for this command."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/PilER2E.png",alt:"Server logs"})),(0,l.kt)("p",null,"Once the import step completes, compilation starts for your open ",(0,l.kt)("inlineCode",{parentName:"p"},"*.scala"),'\nfiles. Once the sources have compiled successfully, you can navigate the the\nsources with "Goto definition" by pressing ',(0,l.kt)("inlineCode",{parentName:"p"},"F12"),"."),(0,l.kt)("h2",{id:"find-symbol-references"},"Find symbol references"),(0,l.kt)("p",null,"The default key binding is ",(0,l.kt)("inlineCode",{parentName:"p"},"shift+F12"),". If you use vim-bindings, you need to be\nin insert-mode."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/BJDkczD.gif",alt:"Find references"})),(0,l.kt)("h2",{id:"goto-symbol-in-workspace"},"Goto symbol in workspace"),(0,l.kt)("p",null,"You can search for symbols in your dependency source using the command palette."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/8X0XNi2.gif",alt:"workspace symbols"})),(0,l.kt)("h2",{id:"manually-trigger-build-import"},"Manually trigger build import"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/LViPc95.png",alt:"Import build command"})),(0,l.kt)("p",null,"You can optionally register a key binding for the command."),(0,l.kt)("h2",{id:"tweaking-sublime-text-for-a-better-productivity"},"Tweaking Sublime Text for a better productivity"),(0,l.kt)("p",null,"This paragraph contains a few tips & trick that can improve your daily productivity with Metals."),(0,l.kt)("h3",{id:"optional-lsp-client-tweaks"},"Optional LSP client tweaks"),(0,l.kt)("p",null,'If you prefer to only enable Metals completions\n(without mixing them with the default ones from Sublime) set the following setting\nin the "Preferences > Preferences: LSP Settings":'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // ...\n  "only_show_lsp_completions": true,\n}\n')),(0,l.kt)("p",null,'Also, if you prefer to show symbol references in Sublime\'s quick panel instead of the bottom panel\nset following setting in the "Preferences > Preferences: LSP Settings":'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // ...\n  "show_references_in_quick_panel": true,\n}\n')),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/7tSiEfX.gif",alt:"Symbol references in the popup"})),(0,l.kt)("h3",{id:"additional-key-mappings"},"Additional key mappings"),(0,l.kt)("p",null,"You can set a few optional key mappings for enable useful action shortcuts and perform some tweaks for the completion popup."),(0,l.kt)("h4",{id:"keymaping-for-formatting-document-via-scalafmt"},"Keymaping for formatting document via scalafmt"),(0,l.kt)("p",null,'Open "Preferences > Key Binding" and register ',(0,l.kt)("inlineCode",{parentName:"p"},"ctrl+alt+l")," to trigger formating document.\ndefinition."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  // ...\n  {\n    "keys": ["ctrl+alt+l"],\n    "command": "lsp_format_document"\n  }\n]\n')),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/wVjC1Ij.gif",alt:"Add key mapping for formatting document via scalafmt"})),(0,l.kt)("h3",{id:"add-key-mapping-for-goto-symbol-in-workspace"},"Add key mapping for Goto symbol in workspace"),(0,l.kt)("p",null,'This an optional step if you want to have a shortcut for looking up symbols in the workspace.\nOpen "Preferences > Key Binding" and add:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  // ...\n  { \n    "keys": ["ctrl+t"], \n    "command": "show_overlay",\n    "args": {"overlay": "command_palette", "command": "lsp_workspace_symbols" }\n  }\n]\n')),(0,l.kt)("h3",{id:"enabling-auto-import-on-completion"},"Enabling auto-import on completion"),(0,l.kt)("p",null,'Metals can complete symbols from your workspace scope and automatically import them.\nBy default, however, if you hit "Enter" to select a completion, the LSP client will\ncomplete the class without importing it, but you can easy remap to use also "Enter" key.\nOpen "Preferences > Key Binding" and add:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[ \n  // ...\n  { "keys": ["enter"], "command": "commit_completion", "context": [{ "key": "auto_complete_visible" } ] },\n  { "keys": ["tab"], "command": "commit_completion", "context": [{ "key": "auto_complete_visible" } ] }\n]\n')),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/RDYx9mB.gif",alt:"Import after Enter key was hit"})),(0,l.kt)("h2",{id:"using-latest-metals-snapshot"},"Using latest Metals SNAPSHOT"),(0,l.kt)("p",null,'Update the "server_version" setting to try out the latest pending Metals\nfeatures by accessing ',(0,l.kt)("inlineCode",{parentName:"p"},"Preferences > Package Settings > LSP > Servers > LSP-metals")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Version"),(0,l.kt)("th",null,"Published"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"0.11.8"),(0,l.kt)("td",null,"10 Aug 2022 04:08")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"0.11.8+163-de34e01e-SNAPSHOT"),(0,l.kt)("td",null,"23 Sep 2022 11:37")))),(0,l.kt)("h2",{id:"files-and-directories-to-include-in-your-gitignore"},"Files and Directories to include in your Gitignore"),(0,l.kt)("p",null,"The Metals server places logs and other files in the ",(0,l.kt)("inlineCode",{parentName:"p"},".metals")," directory. The\nBloop compile server places logs and compilation artifacts in the ",(0,l.kt)("inlineCode",{parentName:"p"},".bloop"),"\ndirectory. The Bloop plugin that generates Bloop configuration is added in the\n",(0,l.kt)("inlineCode",{parentName:"p"},"metals.sbt")," file, which is added at ",(0,l.kt)("inlineCode",{parentName:"p"},"project/metals.sbt")," as well as further\n",(0,l.kt)("inlineCode",{parentName:"p"},"project")," directories depending on how deep ",(0,l.kt)("inlineCode",{parentName:"p"},"*.sbt")," files need to be supported.\nTo support each ",(0,l.kt)("inlineCode",{parentName:"p"},"*.sbt")," file Metals needs to create an additional file at\n",(0,l.kt)("inlineCode",{parentName:"p"},"./project/project/metals.sbt")," relative to the sbt file.\nWorking with Ammonite scripts will place compiled scripts into the ",(0,l.kt)("inlineCode",{parentName:"p"},".ammonite")," directory.\nIt's recommended to exclude these directories and files\nfrom version control systems like git."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"# ~/.gitignore\n.metals/\n.bloop/\n.ammonite/\nmetals.sbt\n")),(0,l.kt)("h2",{id:"worksheets"},"Worksheets"),(0,l.kt)("p",null,"Worksheets are a great way to explore an api, try out an idea, or code\nup an example and quickly see the evaluated expression or result. Behind\nthe scenes worksheets are powered by the great work done in\n",(0,l.kt)("a",{parentName:"p",href:"https://scalameta.org/mdoc/"},"mdoc"),"."),(0,l.kt)("h3",{id:"getting-started-with-worksheets"},"Getting started with Worksheets"),(0,l.kt)("p",null,"To get started with a worksheet you can either use the ",(0,l.kt)("inlineCode",{parentName:"p"},"metals.new-scala-file"),"\ncommand and select ",(0,l.kt)("em",{parentName:"p"},"Worksheet")," or create a file called ",(0,l.kt)("inlineCode",{parentName:"p"},"*.worksheet.sc"),".\nThis format is important since this is what tells Metals that it's meant to be\ntreated as a worksheet and not just a Scala script. Where you create the\nscript also matters. If you'd like to use classes and values from your\nproject, you need to make sure the worksheet is created inside of your ",(0,l.kt)("inlineCode",{parentName:"p"},"src"),"\ndirectory. You can still create a worksheet in other places, but you will\nonly have access to the standard library and your dependencies."),(0,l.kt)("h3",{id:"evaluations"},"Evaluations"),(0,l.kt)("p",null,"After saving you'll see the result of the expression as a comment as the end of the line.\nYou may not see the full result for example if it's too long, so you are also\nable to hover on the comment to expand."),(0,l.kt)("p",null,"Keep in mind that you don't need to wrap your code in an ",(0,l.kt)("inlineCode",{parentName:"p"},"object"),". In worksheets\neverything can be evaluated at the top level."),(0,l.kt)("h3",{id:"using-dependencies-in-worksheets"},"Using dependencies in worksheets"),(0,l.kt)("p",null,"You are able to include an external dependency in your worksheet by including\nit in one of the following two ways."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"// $dep.`organisation`::artifact:version` style\nimport $dep.`com.lihaoyi::scalatags:0.7.0`\n\n// $ivy.`organisation::artifact:version` style\nimport $ivy.`com.lihaoyi::scalatags:0.7.0`\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"::")," is the same as ",(0,l.kt)("inlineCode",{parentName:"p"},"%%")," in sbt, which will append the current Scala binary version\nto the artifact name."),(0,l.kt)("p",null,"You can also import ",(0,l.kt)("inlineCode",{parentName:"p"},"scalac")," options in a special ",(0,l.kt)("inlineCode",{parentName:"p"},"$scalac")," import like below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"import $scalac.`-Ywarn-unused`\n")),(0,l.kt)("h2",{id:"running-scalafix-rules"},"Running scalafix rules"),(0,l.kt)("p",null,"Scalafix allows users to specify some refactoring and linting rules that can be applied to your\ncodebase. Please checkout the ",(0,l.kt)("a",{parentName:"p",href:"https://scalacenter.github.io/scalafix"},"scalafix website")," for more information."),(0,l.kt)("p",null,"Since Metals v0.11.7 it's now possible to run scalafix rules using a special\ncommand ",(0,l.kt)("inlineCode",{parentName:"p"},"metals.scalafix-run"),".\nThis should run all the rules defined in your ",(0,l.kt)("inlineCode",{parentName:"p"},".scalafix.conf")," file. All built-in rules\nand the ",(0,l.kt)("a",{parentName:"p",href:"https://scalacenter.github.io/scalafix/docs/rules/community-rules.html#hygiene-rules"},"community hygiene ones")," can\nbe run without any additional settings. However, for all the other rules users need to\nadd an additional dependency in the ",(0,l.kt)("inlineCode",{parentName:"p"},"metals.scalafixRulesDependencies")," user setting.\nThose rules need to be in form of strings such as ",(0,l.kt)("inlineCode",{parentName:"p"},"com.github.liancheng::organize-imports:0.6.0"),", which\nfollows the same convention as ",(0,l.kt)("a",{parentName:"p",href:"https://get-coursier.io/"},"coursier dependencies"),"."),(0,l.kt)("p",null,"A sample scalafix configuration can be seen below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},'rules = [\n  OrganizeImports,\n  ExplicitResultTypes,\n  RemoveUnused\n]\n\nRemoveUnused.imports = false\n\nOrganizeImports.groupedImports = Explode\nOrganizeImports.expandRelative = true\nOrganizeImports.removeUnused = true\nOrganizeImports.groups = [\n  "re:javax?\\."\n  "scala."\n  "scala.meta."\n  "*"\n]\n\n')))}u.isMDXComponent=!0}}]);