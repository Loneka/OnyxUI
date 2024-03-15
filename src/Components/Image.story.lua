local OnyxUI = script.Parent.Parent

local Fusion = require(OnyxUI.Parent.Fusion)
local Themer = require(OnyxUI.Utils.Themer)

local New = Fusion.New
local Children = Fusion.Children
local Computed = Fusion.Computed

local Frame = require(OnyxUI.Components.Frame)
local Image = require(OnyxUI.Components.Image)

return function(Target: Instance)
	local Instance = Frame {
		Parent = Target,
		AnchorPoint = Vector2.new(0.5, 0.5),
		Position = UDim2.fromScale(0.5, 0.5),
		AutomaticSize = Enum.AutomaticSize.XY,

		[Children] = {
			New "UIListLayout" {
				SortOrder = Enum.SortOrder.LayoutOrder,
				FillDirection = Enum.FillDirection.Vertical,
				Padding = Computed(function()
					return UDim.new(0, Themer.Theme.Spacing["0.75"]:get())
				end),
			},
			Image {
				Image = "rbxassetid://15307540148",
			},
			Image {},
			Image {
				FallbackImage = "rbxassetid://13193902400",
			},
		},
	}

	return function()
		Instance:Destroy()
	end
end
