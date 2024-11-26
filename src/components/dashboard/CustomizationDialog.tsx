import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Settings2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LayoutOptions from "./CustomizationDialog/LayoutOptions";
import WidgetToggles from "./CustomizationDialog/WidgetToggles";

interface CustomizationDialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export default function CustomizationDialog({
  open = true,
  onOpenChange = () => {},
}: CustomizationDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Settings2 className="h-4 w-4" />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[600px] bg-white">
        <DialogHeader>
          <DialogTitle>Dashboard Customization</DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="layout" className="w-full">
          <TabsList className="w-full grid grid-cols-2">
            <TabsTrigger value="layout">Layout Options</TabsTrigger>
            <TabsTrigger value="widgets">Widget Visibility</TabsTrigger>
          </TabsList>

          <TabsContent value="layout" className="mt-4">
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground">
                Choose how you want your dashboard to be organized
              </div>
              <LayoutOptions />
            </div>
          </TabsContent>

          <TabsContent value="widgets" className="mt-4">
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground">
                Select which widgets to show or hide on your dashboard
              </div>
              <WidgetToggles />
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end gap-2 mt-6">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={() => onOpenChange(false)}>Save Changes</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
