local OnyxUI = script.Parent.Parent
local Fusion = require(OnyxUI.Parent.Fusion)
local Util = require(OnyxUI.Util)
local Themer = require(OnyxUI.Themer)

local PubTypes = require(OnyxUI.Util.PubTypes)

local Computed = Fusion.Computed

local Button = require(script.Parent.Button)

export type Props = Button.Props & {
	Image: PubTypes.CanBeState<string>?,
	Disabled: PubTypes.CanBeState<boolean>?,
	Style: PubTypes.CanBeState<string>?,
	Color: PubTypes.CanBeState<Color3>?,
	ContentColor: PubTypes.CanBeState<Color3>?,
	ContentSize: PubTypes.CanBeState<number>?,
	IsHolding: PubTypes.CanBeState<boolean>?,
}

return function(Props: Props)
	local Image = Util.EnsureValue(Props.Image, "string", "")
	local Padding = Computed(function()
		return UDim.new(0, Themer.Theme.Spacing["0.25"]:get())
	end)

	return Button(Util.CombineProps(Props, {
		Name = "IconButton",
		PaddingLeft = Padding,
		PaddingRight = Padding,
		PaddingTop = Padding,
		PaddingBottom = Padding,
		Contents = Computed(function()
			return { Image:get() }
		end),
	}))
end
