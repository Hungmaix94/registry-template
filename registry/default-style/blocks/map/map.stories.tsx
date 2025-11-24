import type { Meta, StoryObj } from "@storybook/react";
import MapComponent from "./map";
import { mockMapData } from "./mock-data";

const meta: Meta<typeof MapComponent> = {
  component: MapComponent,
  title: "Blocks/Map",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof MapComponent>;

export const SingleMarkerMap: Story = {
  args: {
    ...mockMapData.singleMarker,
  },
};

export const MultipleMarkersMap: Story = {
  args: {
    ...mockMapData.multipleMarkers,
  },
};

export const RouteAreaMap: Story = {
  args: {
    ...mockMapData.routeArea,
  },
};
