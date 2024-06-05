local Workspace = game:GetService("Workspace")
local OnyxUI = require(script.Parent.Parent)
local Fusion = require(OnyxUI.Packages.Fusion)
local EnsureValue = require(OnyxUI.Utils.EnsureValue)
local PubTypes = require(script.Parent.Parent.PubTypes)

local Value = Fusion.Value
local Computed = Fusion.Computed
local Out = Fusion.Out
local Hydrate = Fusion.Hydrate

local Base = require(script.Parent.Base)
local Frame = require(script.Parent.Frame)

type Props = Base.BaseProps & {
	BaseResolution: PubTypes.CanBeState<Vector2>,
	MinScale: PubTypes.CanBeState<number>?,
	MaxScale: PubTypes.CanBeState<number>?,
	ScaleMultiplier: PubTypes.CanBeState<number>?,
}

return function(Props: Props)
	local Name = EnsureValue(Props.Name, "string", "AutoScaleFrame")
	local BaseResolution = EnsureValue(Props.BaseResolution, "Vector2", Vector2.new())
	local MinScale = EnsureValue(Props.MinScale, "number", 0.8)
	local MaxScale = EnsureValue(Props.MaxScale, "number", math.huge)
	local ScaleMultiplier = EnsureValue(Props.ScaleMultiplier, "number", 1)

	local ViewportSize = Value(Vector2.new())
	Hydrate(Workspace.CurrentCamera) {
		[Out "ViewportSize"] = ViewportSize,
	}

	return Frame {
		Name = Name,
		Scale = Computed(function()
			local Ratio = ScaleMultiplier:get()
				/ math.max(
					(BaseResolution:get().X / ViewportSize:get().X),
					(BaseResolution:get().Y / ViewportSize:get().Y)
				)
			return math.clamp(Ratio, MinScale:get(), MaxScale:get())
		end),
	}
end
