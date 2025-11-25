import React from "react";
import Button from "@/components/ui/Button";

const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <div className="flex gap-2 mt-8">
        <Button text="Save" />

        <Button text="Add Crime Record" icon="mdi:plus" iconPosition="left" />

        <Button text="Next" icon="mdi:arrow-right" iconPosition="right" />

        <Button isLoading={true} loadingText="Saving..." />
      </div>
    </div>
  );
};

export default HomePage;
