const chroma = require("chroma-js");
const { getColors } = require("./colors");

// Choosing colors
// There are two ways to define what color is used:

// 1. Color scale from primer/primitives.
//    e.g. "textLink.foreground": scale.blue[2],
// 2. Hex value: Only use for exceptions
//    e.g. "textLink.foreground": "#fff",

function getTheme({ theme, name }) {
  // Usage: color.text.primary
  const color = getColors(theme);
  // Usage: scale.blue[6]
  const scale = color.scale;

  const editorForeground    = color.text.primary;

  return {
    name: name,
    colors: {
      focusBorder          : color.state.focus.border,
      foreground           : color.text.primary,
      descriptionForeground: color.text.tertiary,
      errorForeground      : color.text.danger,

      "textLink.foreground"      : color.text.link,
      "textLink.activeForeground": color.text.link,
      "textBlockQuote.background": color.bg.canvasInset,
      "textBlockQuote.border"    : color.markdown.blockquoteBorder,
      "textCodeBlock.background" : chroma(color.markdown.codeBg).hex(),
      "textPreformat.foreground" : color.text.secondary,
      "textSeparator.foreground" : color.border.secondary,

      "button.background"     : color.btn.primary.bg,
      "button.foreground"     : color.btn.primary.text,
      "button.hoverBackground": color.btn.primary.hoverBg,

      "checkbox.background": color.bg.tertiary,
      "checkbox.border"    : color.border.primary,

      "dropdown.background"    : color.bg.overlay,
      "dropdown.border"        : color.border.overlay,
      "dropdown.foreground"    : color.text.primary,
      "dropdown.listBackground": color.bg.overlay,

      "input.background"           : color.input.bg,
      "input.border"               : color.input.border,
      "input.foreground"           : color.text.primary,
      "input.placeholderForeground": color.text.placeholder,

      "badge.foreground": scale.blue[2],
      "badge.background": scale.blue[7],

      "progressBar.background": scale.blue[5],

      "titleBar.activeForeground"  : color.text.secondary,
      "titleBar.activeBackground"  : color.bg.canvas,
      "titleBar.inactiveForeground": color.text.tertiary,
      "titleBar.inactiveBackground": color.bg.canvasInset,
      "titleBar.border"            : color.border.primary,

      "activityBar.foreground"        : color.text.primary,
      "activityBar.inactiveForeground": color.text.tertiary,
      "activityBar.background"        : color.bg.canvas,
      "activityBarBadge.foreground"   : scale.white,
      "activityBarBadge.background"   : scale.blue[5],
      "activityBar.activeBorder"      : "#f9826c",
      "activityBar.border"            : color.border.primary,

      "sideBar.foreground"             : color.text.secondary,
      "sideBar.background"             : color.bg.canvasInset,
      "sideBar.border"                 : color.border.primary,
      "sideBarTitle.foreground"        : color.text.primary,
      "sideBarSectionHeader.foreground": color.text.primary,
      "sideBarSectionHeader.background": color.bg.canvasInset,
      "sideBarSectionHeader.border"    : color.border.primary,

      "list.hoverForeground"            : color.text.secondary,
      "list.inactiveSelectionForeground": color.text.secondary,
      "list.activeSelectionForeground"  : color.text.secondary,
      "list.hoverBackground"            : scale.gray[8],
      "list.inactiveSelectionBackground": scale.gray[8],
      "list.activeSelectionBackground"  : scale.gray[7],
      "list.focusForeground"            : scale.gray[0],
      "list.focusBackground"            : scale.gray[7],
      "list.inactiveFocusBackground"    : scale.gray[8],
      "list.highlightForeground"        : scale.blue[4],

      "tree.indentGuidesStroke": color.border.secondary,

      "notificationCenterHeader.foreground": scale.gray[4],
      "notificationCenterHeader.background": scale.gray[9],
      "notifications.foreground"           : color.text.secondary,
      "notifications.background"           : scale.gray[8],
      "notifications.border"               : color.border.primary,
      "notificationsErrorIcon.foreground"  : scale.red[4],
      "notificationsWarningIcon.foreground": scale.orange[3],
      "notificationsInfoIcon.foreground"   : scale.blue[3],

      "pickerGroup.border"    : scale.gray[7],
      "pickerGroup.foreground": color.text.secondary,
      "quickInput.background" : scale.gray[9],
      "quickInput.foreground" : color.text.primary,

      "statusBar.foreground"             : color.text.secondary,
      "statusBar.background"             : color.bg.canvas,
      "statusBar.border"                 : color.border.primary,
      "statusBar.noFolderBackground"     : color.bg.canvas,
      "statusBar.debuggingBackground"    : color.bg.dangerInverse,
      "statusBar.debuggingForeground"    : scale.white,
      "statusBarItem.prominentBackground": color.bg.tertiary,

      "editorGroupHeader.tabsBackground": color.bg.canvasInset,
      "editorGroupHeader.tabsBorder"    : color.border.primary,
      "editorGroup.border"              : color.border.primary,

      "tab.activeForeground"        : color.text.primary,
      "tab.inactiveForeground"      : color.text.tertiary,
      "tab.inactiveBackground"      : color.bg.canvasInset,
      "tab.activeBackground"        : color.bg.canvas,
      "tab.hoverBackground"         : color.bg.canvas,
      "tab.unfocusedHoverBackground": color.state.hover.secondaryBg,
      "tab.border"                  : color.border.primary,
      "tab.unfocusedActiveBorderTop": color.border.primary,
      "tab.activeBorder"            : color.bg.canvas,
      "tab.unfocusedActiveBorder"   : color.bg.canvas,
      "tab.activeBorderTop"         : "#f9826c",

      "breadcrumb.foreground"               : color.text.tertiary,
      "breadcrumb.focusForeground"          : color.text.primary,
      "breadcrumb.activeSelectionForeground": color.text.secondary,
      "breadcrumbPicker.background"         : color.bg.overlay,

      "editor.foreground"                 : editorForeground,
      "editor.background"                 : color.bg.canvas,
      "editorWidget.background"           : color.bg.overlay,
      "editor.foldBackground"             : color.bg.canvasInset,
      "editor.lineHighlightBackground"    : color.codemirror.activelineBg,
      "editorLineNumber.foreground"       : color.codemirror.linenumberText,
      "editorLineNumber.activeForeground" : color.text.primary,
      "editorIndentGuide.background"      : color.border.secondary,
      "editorIndentGuide.activeBackground": color.border.primary,
      "editorWhitespace.foreground"       : scale.gray[5],
      "editorCursor.foreground"           : scale.blue[2],

      "editor.findMatchBackground"          : "#ffd33d44",
      "editor.findMatchHighlightBackground" : "#ffd33d22",
      "editor.inactiveSelectionBackground"  : "#3392FF22",
      "editor.selectionBackground"          : "#3392FF44",
      "editor.selectionHighlightBackground" : "#17E5E633",
      "editor.selectionHighlightBorder"     : "#17E5E600",
      "editor.wordHighlightBackground"      : "#17E5E600",
      "editor.wordHighlightStrongBackground": "#17E5E600",
      "editor.wordHighlightBorder"          : "#17E5E699",
      "editor.wordHighlightStrongBorder"    : "#17E5E666",
      "editorBracketMatch.background"       : "#17E5E650",
      "editorBracketMatch.border"           : "#17E5E600",

      "editorGutter.modifiedBackground": color.diff.change.border,
      "editorGutter.addedBackground"   : color.diff.addition.border,
      "editorGutter.deletedBackground" : color.diff.deletion.border,

      "diffEditor.insertedTextBackground": chroma(color.diff.addition.bg).hex(),
      "diffEditor.removedTextBackground": chroma(color.diff.deletion.bg).hex(),

      "scrollbar.shadow"                : "#0008",
      "scrollbarSlider.background"      : "#484F5833",
      "scrollbarSlider.hoverBackground" : "#484F5844",
      "scrollbarSlider.activeBackground": "#484F5888",
      "editorOverviewRuler.border"      : scale.black,

      "panel.background"             : color.bg.canvasInset,
      "panel.border"                 : color.border.primary,
      "panelTitle.activeBorder"      : "#f9826c",
      "panelTitle.activeForeground"  : color.text.primary,
      "panelTitle.inactiveForeground": color.text.tertiary,
      "panelInput.border"            : color.border.primary,

      "terminal.foreground": color.text.secondary,

      "gitDecoration.addedResourceForeground"      : color.diff.addition.text,
      "gitDecoration.modifiedResourceForeground"   : color.diff.change.text,
      "gitDecoration.deletedResourceForeground"    : color.diff.deletion.text,
      "gitDecoration.untrackedResourceForeground"  : color.diff.addition.text,
      "gitDecoration.ignoredResourceForeground"    : color.text.disabled,
      "gitDecoration.conflictingResourceForeground": color.text.warning,
      "gitDecoration.submoduleResourceForeground"  : color.text.secondary,

      "debugToolBar.background"                    : color.bg.overlay,
      "editor.stackFrameHighlightBackground"       : "#a707",
      "editor.focusedStackFrameHighlightBackground": "#b808",

      "peekViewEditor.matchHighlightBackground": "#ffd33d33",
      "peekViewResult.matchHighlightBackground": "#ffd33d33",
      "peekViewEditor.background"              : "#0d111788",
      "peekViewResult.background"              : scale.gray[9],

      "settings.headerForeground"        : color.text.secondary,
      "settings.modifiedItemIndicator"   : color.diff.change.border,
      "welcomePage.buttonBackground"     : color.btn.bg,
      "welcomePage.buttonHoverBackground": color.btn.hoverBg,
    },
    semanticHighlighting: true,
    tokenColors: [
      {
        scope: ["comment", "punctuation.definition.comment", "string.comment"],
        settings: {
          foreground: scale.gray[3],
        },
      },
      {
        scope: [
          "constant",
          "entity.name.constant",
          "variable.other.constant",
          "variable.language",
          "entity",
        ],
        settings: {
          foreground: scale.blue[2],
        },
      },
      {
        scope: [
          "entity.name",
          "meta.export.default",
          "meta.definition.variable"
        ],
        settings: {
          foreground: scale.orange[2],
        },
      },
      {
        scope: [
          "variable.parameter.function",
          "meta.jsx.children",
          "meta.block",
          "meta.tag.attributes",
          "entity.name.constant",
          "meta.object.member",
          "meta.embedded.expression"
        ],
        settings: {
          foreground: editorForeground,
        },
      },
      {
        "scope": "entity.name.function",
        "settings": {
          foreground: scale.purple[2],
        }
      },
      {
        "scope": [
          "entity.name.tag",
          "support.class.component"
        ],
        settings: {
          foreground: scale.green[1],
        },
      },
      {
        scope: "keyword",
        settings: {
          foreground: scale.red[3],
        },
      },
      {
        scope: ["storage", "storage.type"],
        settings: {
          foreground: scale.red[3],
        },
      },
      {
        scope: [
          "storage.modifier.package",
          "storage.modifier.import",
          "storage.type.java",
        ],
        settings: {
          foreground: editorForeground,
        },
      },
      {
        scope: [
          "string",
          "punctuation.definition.string",
          "string punctuation.section.embedded source",
        ],
        settings: {
          foreground: scale.blue[1],
        },
      },
      {
        scope: "support",
        settings: {
          foreground: scale.blue[2],
        },
      },
      {
        scope: "meta.property-name",
        settings: {
          foreground: scale.blue[2],
        },
      },
      {
        scope: "variable",
        settings: {
          foreground: scale.orange[2],
        },
      },
      {
        scope: "variable.other",
        settings: {
          foreground: editorForeground,
        },
      },
      {
        scope: "invalid.broken",
        settings: {
          fontStyle: "italic",
          foreground: scale.red[2],
        },
      },
      {
        scope: "invalid.deprecated",
        settings: {
          fontStyle: "italic",
          foreground: scale.red[2],
        },
      },
      {
        scope: "invalid.illegal",
        settings: {
          fontStyle: "italic",
          foreground: scale.red[2],
        },
      },
      {
        scope: "invalid.unimplemented",
        settings: {
          fontStyle: "italic",
          foreground: scale.red[2],
        },
      },
      {
        scope: "carriage-return",
        settings: {
          fontStyle: "italic underline",
          background: scale.red[3],
          foreground: scale.gray[9],
          content: "^M",
        },
      },
      {
        scope: "message.error",
        settings: {
          foreground: scale.red[2],
        },
      },
      {
        scope: "string source",
        settings: {
          foreground: editorForeground,
        },
      },
      {
        scope: "string variable",
        settings: {
          foreground: scale.blue[2],
        },
      },
      {
        scope: ["source.regexp", "string.regexp"],
        settings: {
          foreground: scale.blue[1],
        },
      },
      {
        scope: [
          "string.regexp.character-class",
          "string.regexp constant.character.escape",
          "string.regexp source.ruby.embedded",
          "string.regexp string.regexp.arbitrary-repitition",
        ],
        settings: {
          foreground: scale.blue[1],
        },
      },
      {
        scope: "string.regexp constant.character.escape",
        settings: {
          fontStyle: "bold",
          foreground: scale.green[1],
        },
      },
      {
        scope: "support.constant",
        settings: {
          foreground: scale.blue[2],
        },
      },
      {
        scope: "support.variable",
        settings: {
          foreground: scale.blue[2],
        },
      },
      {
        scope: "meta.module-reference",
        settings: {
          foreground: scale.blue[2],
        },
      },
      {
        scope: "punctuation.definition.list.begin.markdown",
        settings: {
          foreground: scale.orange[2],
        },
      },
      {
        scope: ["markup.heading", "markup.heading entity.name"],
        settings: {
          fontStyle: "bold",
          foreground: scale.blue[2],
        },
      },
      {
        scope: "markup.quote",
        settings: {
          foreground: scale.green[1],
        },
      },
      {
        scope: "markup.italic",
        settings: {
          fontStyle: "italic",
          foreground: editorForeground,
        },
      },
      {
        scope: "markup.bold",
        settings: {
          fontStyle: "bold",
          foreground: editorForeground,
        },
      },
      {
        scope: "markup.raw",
        settings: {
          foreground: scale.blue[2],
        },
      },
      {
        scope: [
          "markup.deleted",
          "meta.diff.header.from-file",
          "punctuation.definition.deleted",
        ],
        settings: {
          background: scale.red[9],
          foreground: scale.red[2],
        },
      },
      {
        scope: [
          "markup.inserted",
          "meta.diff.header.to-file",
          "punctuation.definition.inserted",
        ],
        settings: {
          background: scale.green[9],
          foreground: scale.green[1],
        },
      },
      {
        scope: ["markup.changed", "punctuation.definition.changed"],
        settings: {
          background: scale.orange[8],
          foreground: scale.orange[2],
        },
      },
      {
        scope: ["markup.ignored", "markup.untracked"],
        settings: {
          foreground: scale.gray[8],
          background: scale.blue[2],
        },
      },
      {
        scope: "meta.diff.range",
        settings: {
          foreground: scale.purple[2],
          fontStyle: "bold",
        },
      },
      {
        scope: "meta.diff.header",
        settings: {
          foreground: scale.blue[2],
        },
      },
      {
        scope: "meta.separator",
        settings: {
          fontStyle: "bold",
          foreground: scale.blue[2],
        },
      },
      {
        scope: "meta.output",
        settings: {
          foreground: scale.blue[2],
        },
      },
      {
        scope: [
          "brackethighlighter.tag",
          "brackethighlighter.curly",
          "brackethighlighter.round",
          "brackethighlighter.square",
          "brackethighlighter.angle",
          "brackethighlighter.quote",
        ],
        settings: {
          foreground: scale.gray[3],
        },
      },
      {
        scope: "brackethighlighter.unmatched",
        settings: {
          foreground: scale.red[2],
        },
      },
      {
        scope: ["constant.other.reference.link", "string.other.link"],
        settings: {
          foreground: scale.blue[1],
          fontStyle: "underline",
        },
      },
    ],
  };
}

module.exports = getTheme;
