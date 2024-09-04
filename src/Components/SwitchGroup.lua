--[=[
		@class SwitchGroup
		
		Useful for pairing [`SwitchInput`](/api/SwitchInput)s with other components, like [`Text`](/api/Text).
]=]

local OnyxUI = script.Parent.Parent
local Util = require(OnyxUI.Util)
local Themer = require(OnyxUI.Themer)
local Fusion = require(OnyxUI.Packages.Fusion)

local peek = Fusion.peek

local BaseButton = require(script.Parent.BaseButton)
local SwitchInput = require(script.Parent.SwitchInput)
local Components = {
	BaseButton = BaseButton,
	SwitchInput = SwitchInput,
}

export type Props = SwitchInput.Props & {}

--[=[
		@within SwitchGroup
		@interface SwitchGroupProps

		@field ... SwitchInputProps
]=]
return function(Scope: Fusion.Scope<any>, Props: Props)
	local Scope: Fusion.Scope<typeof(Fusion) & typeof(Util) & typeof(Components)> =
		Fusion.innerScope(Scope, Fusion, Util, Components)
	local Theme = Themer.Theme:now()

	local Switched = Scope:EnsureValue(Util.Fallback(Props.Switched, false))

	Props.Switched = Switched

	return Scope:BaseButton(Util.CombineProps(Props, {
		Name = "SwitchGroup",
		ClickSound = Theme.Sound.Switch,
		Disabled = Props.Disabled,

		OnActivated = function()
			Switched:set(not peek(Switched))
		end,
	}))
end
