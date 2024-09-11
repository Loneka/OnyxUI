"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9162],{3955:e=>{e.exports=JSON.parse('{"functions":[{"name":"NewTheme","desc":"Creates the specified theme.","params":[{"name":"Scope","desc":"","lua_type":"Fusion.Scope<any>"},{"name":"ThemeSpec","desc":"","lua_type":"ThemeSpec"}],"returns":[{"desc":"","lua_type":"Theme"}],"function_type":"static","source":{"line":42,"path":"src/Themer/init.luau"}}],"properties":[{"name":"Theme","desc":"The currently active theme. Use `Themer.Theme:now()` to get the active theme, and `Themer.Theme:is(MyTheme):during()` to make code use another theme. See [Fusion Contextuals](https://elttob.uk/Fusion/0.3/tutorials/best-practices/sharing-values/?h=contextuals#contextuals) for more information.","lua_type":"Fusion.Contextual<Theme>","source":{"line":52,"path":"src/Themer/init.luau"}}],"types":[{"name":"ThemeSpec","desc":"A specification table for theme properties. Check out [ThemeSpec.luau](https://github.com/ImAvafe/OnyxUI/blob/main/src/Themer/ThemeSpec.luau) for a full reference of available theme properties.","lua_type":"table","source":{"line":12,"path":"src/Themer/init.luau"}},{"name":"Theme","desc":"An active theme to be referenced in UI.","lua_type":"table","source":{"line":18,"path":"src/Themer/init.luau"}}],"name":"Themer","desc":"Themer allows you to customize components throughout OnyxUI, with support for things like colors, corner radiuses, paddings, etc. You\'ll also probably want to reference it within your own UI for a more consistent design.","source":{"line":6,"path":"src/Themer/init.luau"}}')}}]);