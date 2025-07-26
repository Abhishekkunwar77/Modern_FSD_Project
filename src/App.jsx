import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import LandingPage from "./components/LandingPage";
import ActivityForm from "./components/ActivityForm";
import ActivityList from "./components/ActivityList";
import { getActivities, saveActivities } from "./components/utils/storage";
import Services from "./components/Services";
import LoginPage from "./components/LoginPage";
import About from './components/About';
import PrivacyPolicy from './components/PrivacyPolicy';
import Subscribe from './components/Subscribe';
import Plan from "./components/Plan"
const App = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    setLogs(getActivities());
  }, []);

  const addLog = (log) => {
    const updatedLogs = [log, ...logs];
    setLogs(updatedLogs);
    saveActivities(updatedLogs);
  };

  const deleteLog = (id) => {
    const updatedLogs = logs.filter((log) => log.id !== id);
    setLogs(updatedLogs);
    saveActivities(updatedLogs);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <Toaster />
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <LandingPage />
                <Services />
                <Subscribe/>
                <Contact />
              </>
            }
          />
          <Route
            path="/add-activities"
            element={
              <div className="max-w-xl mx-auto mt-6">
                <ActivityForm onAdd={addLog} />
              </div>
            }
          />
          <Route
            path="/view-activities"
            element={
              <div className="max-w-xl mx-auto mt-6">
                <ActivityList logs={logs} onDelete={deleteLog} />
              </div>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/pro-plans" element={<Plan />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
