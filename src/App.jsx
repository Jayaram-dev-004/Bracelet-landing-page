import React, { useState } from "react";
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";

const App = () => {
  const [showPageOne, setShowPageOne] = useState(true);

  const handleProceed = () => {
    // Trigger transition with fade effect
    setShowPageOne(false);
  };

  return (
    <div>
      {showPageOne ? (
        <PageOne onProceed={handleProceed} />
      ) : (
        <PageTwo />
      )}
    </div>
  );
};

export default App;