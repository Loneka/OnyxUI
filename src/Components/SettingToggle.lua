local OnyxUI = script.Parent.Parent

local Fusion = require(OnyxUI.Parent.Fusion)
local EnsureValue = require(OnyxUI.Utils.EnsureValue)
local Themer = require(OnyxUI.Utils.Themer)

local Children = Fusion.Children
local Computed = Fusion.Computed
local New = Fusion.New

local SwitchGroup = require(OnyxUI.Components.SwitchGroup)
local SwitchInput = require(OnyxUI.Components.SwitchInput)
local Text = require(OnyxUI.Components.Text)

local function SettingToggle(Props: table)
	Props.SwitchedOn = EnsureValue(Props.SwitchedOn, "boolean", false)
	Props.Disabled = EnsureValue(Props.Disabled, "boolean", false)

	return SwitchGroup {
		Size = UDim2.fromScale(1, 0),
		AutomaticSize = Enum.AutomaticSize.Y,
		SwitchedOn = Props.SwitchedOn,
		Disabled = Props.Disabled,

		[Children] = {
			Text {
				AnchorPoint = Vector2.new(0, 0.5),
				Position = UDim2.fromScale(0, 0.5),
				Text = Props.Label,
				TextSize = Themer.Theme.TextSize,
				TextColor3 = Computed(function()
					if not Props.Disabled:get() then
						return Color3.fromRGB(255, 255, 255)
					else
						return Color3.fromRGB(207, 207, 207)
					end
				end),
			},
			SwitchInput {
				AnchorPoint = Vector2.new(1, 0.5),
				Position = UDim2.fromScale(1, 0.5),
				SwitchedOn = Props.SwitchedOn,
				Disabled = Props.Disabled,
				Selectable = false,
			},
		},
	}
end

return SettingToggle
