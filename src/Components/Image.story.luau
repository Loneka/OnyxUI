local OnyxUI = script.Parent.Parent

local Fusion = require(OnyxUI.Parent.Fusion)
local Themer = require(OnyxUI.Themer)

local Scoped = Fusion.scoped
local Children = Fusion.Children

local Frame = require(OnyxUI.Components.Frame)
local Image = require(OnyxUI.Components.Image)
local Components = {
	Frame = Frame,
	Image = Image,
}

return {
	story = function(Props)
		local Scope = Fusion.innerScope(Props.scope, Fusion, Components)
		local Theme = Themer.Theme:now()

		Scope:Frame {
			Parent = Props.target,
			AutomaticSize = Enum.AutomaticSize.XY,
			ListEnabled = true,
			ListFillDirection = Enum.FillDirection.Horizontal,
			ListPadding = Scope:Computed(function(Use)
				return UDim.new(0, Use(Theme.Spacing["0.75"]))
			end),

			[Children] = {
				Scope:Image {
					Image = "rbxassetid://15307540148",
				},
				Scope:Image {},
				Scope:Image {
					FallbackImage = "rbxassetid://13193902400",
				},
			},
		}
	end,
	fusion = Fusion,
}
