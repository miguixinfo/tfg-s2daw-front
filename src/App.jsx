import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Error from './components/Error';
import Navbar from './components/Navbar';
import Users from './components/Users/Users';
import Login from './components/Security/Login';
import Register from './components/Security/Register';
import Footer from './components/Footer';
import Home from './Home';
import Tools from './components/Tools/Tools';
import CableTray from './components/Tools/CableTray';
import AddCableTray from './components/Tools/AddCableTray';
import EthernetCable from './components/Tools/EthernetCable';
import AddEthernetCable from './components/Tools/AddEthernetCable';
import KeystoneJack from './components/Tools/KeystoneJack';
import AddKeystoneJack from './components/Tools/AddKeystoneJack';
import NetworkCard from './components/Tools/NetworkCard';
import AddNetworkCard from './components/Tools/AddNetworkCard';
import PatchPanel from './components/Tools/PatchPanel';
import AddPatchPanel from './components/Tools/AddPatchPanel';
import PowerStrip from './components/Tools/PowerStrip';
import AddPowerStrip from './components/Tools/AddPowerStrip';
import Switch from './components/Tools/Switch';
import AddSwitch from './components/Tools/AddSwitch';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<Users />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/cableTrays" element={<CableTray />} />
        <Route path="/addCableTray" element={<AddCableTray />} />
        <Route path="/ethernetCables" element={<EthernetCable />} />
        <Route path="/addEthernetCable" element={<AddEthernetCable />} />
        <Route path="/keystoneJacks" element={<KeystoneJack />} />
        <Route path="/addKeystoneJack" element={<AddKeystoneJack />} />
        <Route path="/networkCards" element={<NetworkCard />} />
        <Route path="/addNetworkCard" element={<AddNetworkCard />} />
        <Route path="/patchPanels" element={<PatchPanel />} />
        <Route path="/addPatchPanel" element={<AddPatchPanel />} />
        <Route path="/powerStrips" element={<PowerStrip />} />
        <Route path="/addPowerStrip" element={<AddPowerStrip />} />
        <Route path="/switchs" element={<Switch />} />
        <Route path="/addSwitch" element={<AddSwitch />} />
        <Route path="*" exact element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
