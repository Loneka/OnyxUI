"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1314],{74337:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>t,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"styling-props","title":"Styling Props","description":"Styling props are globally supported props for styling UI. These aim to stay close to Roblox\'s way of doing things, but differ when necessary, most notably in children-based styling.","source":"@site/docs/styling-props.md","sourceDirName":".","slug":"/styling-props","permalink":"/OnyxUI/docs/styling-props","draft":false,"unlisted":false,"editUrl":"https://github.com/ImAvafe/OnyxUI/edit/master/docs/styling-props.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"defaultSidebar","previous":{"title":"Theming","permalink":"/OnyxUI/docs/theming"},"next":{"title":"Utilities","permalink":"/OnyxUI/docs/utilities"}}');var d=n(74848),r=n(28453);const t={sidebar_position:4},o="Styling Props",c={},l=[{value:"Property-based styling",id:"property-based-styling",level:2},{value:"Children-based styling",id:"children-based-styling",level:2},{value:"Basics",id:"basics",level:3},{value:"Layouts",id:"layouts",level:3},{value:"Constraints",id:"constraints",level:3},{value:"Use in custom components",id:"use-in-custom-components",level:2}];function h(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.header,{children:(0,d.jsx)(s.h1,{id:"styling-props",children:"Styling Props"})}),"\n",(0,d.jsx)(s.p,{children:"Styling props are globally supported props for styling UI. These aim to stay close to Roblox's way of doing things, but differ when necessary, most notably in children-based styling."}),"\n",(0,d.jsx)(s.h2,{id:"property-based-styling",children:"Property-based styling"}),"\n",(0,d.jsxs)(s.p,{children:["Traditional ",(0,d.jsx)(s.a,{href:"https://create.roblox.com/docs/reference/engine/classes/GuiObject",children:(0,d.jsx)(s.code,{children:"GuiObject"})})," properties like ",(0,d.jsx)(s.a,{href:"https://create.roblox.com/docs/reference/engine/classes/GuiObject#BackgroundColor3",children:(0,d.jsx)(s.code,{children:"BackgroundColor3"})})," are supported identically to how Roblox does it. Use these as you would normally. There are exceptions however, like how ",(0,d.jsx)(s.code,{children:"Color"})," is preferred over ",(0,d.jsx)(s.code,{children:"BackgroundColor3"})," in ",(0,d.jsx)(s.a,{href:"/api/Button",children:(0,d.jsx)(s.code,{children:"Button"})}),"."]}),"\n",(0,d.jsx)(s.h2,{id:"children-based-styling",children:"Children-based styling"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.code,{children:"UIPadding"}),"s, ",(0,d.jsx)(s.code,{children:"UIStroke"}),"s, ",(0,d.jsx)(s.code,{children:"UIListLayout"}),"s... Children-based styling is just too much boilerplate. In OnyxUI, all components support an extensive set of props to ",(0,d.jsx)(s.em,{children:"avoid"})," working with these objects. See references below:"]}),"\n",(0,d.jsx)(s.h3,{id:"basics",children:"Basics"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Roblox \ud83e\udd13"}),(0,d.jsx)(s.th,{children:"OnyxUI \ud83d\ude0e"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"UICorner"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"CornerRadius"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"UIPadding"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:"Padding"}),", ",(0,d.jsx)(s.code,{children:"PaddingTop"}),", ",(0,d.jsx)(s.code,{children:"PaddingLeft"}),", ",(0,d.jsx)(s.code,{children:"PaddingRight"}),", ",(0,d.jsx)(s.code,{children:"PaddingBottom"})]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"UIStroke"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:"StrokeEnabled"}),", ",(0,d.jsx)(s.code,{children:"StrokeThickness"}),", ",(0,d.jsx)(s.code,{children:"StrokeColor"}),", ",(0,d.jsx)(s.code,{children:"StrokeTransparency"}),", ",(0,d.jsx)(s.code,{children:"StrokeLineJoinMode"}),", ",(0,d.jsx)(s.code,{children:"StrokeApplyStrokeMode"})]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"UIGradient"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:"GradientEnabled"}),", ",(0,d.jsx)(s.code,{children:"GradientColor"}),", ",(0,d.jsx)(s.code,{children:"GradientOffset"}),", ",(0,d.jsx)(s.code,{children:"GradientRotation"}),", ",(0,d.jsx)(s.code,{children:"GradientTransparency"})]})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"layouts",children:"Layouts"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Roblox \ud83e\udd13"}),(0,d.jsx)(s.th,{children:"OnyxUI \ud83d\ude0e"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"UIFlexItem"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:"FlexMode"}),", ",(0,d.jsx)(s.code,{children:"FlexItemLineAlignment"}),", ",(0,d.jsx)(s.code,{children:"FlexGrowRatio"}),", ",(0,d.jsx)(s.code,{children:"FlexShrinkRatio"})]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"UIListLayout"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:"ListEnabled"}),", ",(0,d.jsx)(s.code,{children:"ListPadding"}),", ",(0,d.jsx)(s.code,{children:"ListFillDirection"}),", ",(0,d.jsx)(s.code,{children:"ListSortOrder"}),", ",(0,d.jsx)(s.code,{children:"ListWraps"}),", ",(0,d.jsx)(s.code,{children:"ListHorizontalAlignment"}),", ",(0,d.jsx)(s.code,{children:"ListHorizontalFlex"}),", ",(0,d.jsx)(s.code,{children:"ListVerticalAlignment"}),", ",(0,d.jsx)(s.code,{children:"ListVerticalFlex"}),", ",(0,d.jsx)(s.code,{children:"ListItemLineAlignment"})]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"UIGridLayout"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:"GridEnabled"}),", ",(0,d.jsx)(s.code,{children:"GridFillDirection"}),", ",(0,d.jsx)(s.code,{children:"GridFillDirectionMaxCells"}),", ",(0,d.jsx)(s.code,{children:"GridCellPadding"}),", ",(0,d.jsx)(s.code,{children:"GridCellSize"}),", ",(0,d.jsx)(s.code,{children:"GridSortOrder"}),", ",(0,d.jsx)(s.code,{children:"GridStartCorner"}),", ",(0,d.jsx)(s.code,{children:"GridHorizontalAlignment"}),", ",(0,d.jsx)(s.code,{children:"GridVerticalAlignment"})]})]})]})]}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsxs)(s.em,{children:["For other layouts like ",(0,d.jsx)(s.code,{children:"UITableLayout"})," and ",(0,d.jsx)(s.code,{children:"UIPageLayout"}),", see the ",(0,d.jsx)(s.a,{href:"/api/Base",children:(0,d.jsx)(s.code,{children:"Base"})})," component's source code."]})}),"\n",(0,d.jsx)(s.h3,{id:"constraints",children:"Constraints"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Roblox \ud83e\udd13"}),(0,d.jsx)(s.th,{children:"OnyxUI \ud83d\ude0e"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"UIAspectRatioConstraint"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:"AspectRatio"}),", ",(0,d.jsx)(s.code,{children:"AspectType"}),", ",(0,d.jsx)(s.code,{children:"DominantAxis"})]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"UISizeConstraint"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:"MaxSize"}),", ",(0,d.jsx)(s.code,{children:"MinSize"})]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"UITextSizeConstraint"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:"MaxTextSize"}),", ",(0,d.jsx)(s.code,{children:"MinTextSize"})]})]})]})]}),"\n",(0,d.jsx)(s.h2,{id:"use-in-custom-components",children:"Use in custom components"}),"\n",(0,d.jsxs)(s.p,{children:["To support styling props in your own components, make use of the ",(0,d.jsx)(s.a,{href:"/docs/utilities#combineprops",children:(0,d.jsx)(s.code,{children:"CombineProps"})})," utility to pass props through automatically. Your component must be based upon an OnyxUI component such as ",(0,d.jsx)(s.a,{href:"/api/Base",children:(0,d.jsx)(s.code,{children:"Base"})})," for this to work."]})]})}function a(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>o});var i=n(96540);const d={},r=i.createContext(d);function t(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);