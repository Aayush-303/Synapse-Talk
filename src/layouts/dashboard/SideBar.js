import { Avatar, Box, Divider, IconButton, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
// import React, { useEffect } from "react";
import { faker } from "@faker-js/faker";
import Logo from "../../assets/Images/logo.ico"
import { Nav_Buttons } from "../../data";
import { Gear } from "phosphor-react";
import { useState } from "react";
import useSettings from "../../hooks/useSettings"
import AntSwitch from "../../components/AntSwitch";

const SideBar = () => {
    const theme = useTheme();
    const [selected, setSelected] = useState(0);
    const {onToggleMode} = useSettings();
  return (
    <Box p={2} sx={{ backgroundColor: theme.palette.background.paper, boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)", height: "100vh", width: 100 }}>

        <Stack direction="column" alignItems={"center"} justifyContent="space-between" sx={{ height: "100%" }} spacing={3}>

          <Stack alignItems={"center"} spacing={4}>
            <Box sx={{ backgroundColor: theme.palette.primary.main, height: 64, width: 64, borderRadius: 1.5 }}>
              <img src={Logo} alt={"chat app logo"} />
            </Box>
            <Stack sx={{ width: "max-content" }} direction="column" alignItems="center" spacing={3}>
              {Nav_Buttons.map((el) => 
                el.index === selected ? (
                  <Box p={1} sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}>
                    <IconButton sx={{ width: "max-content", color: "#ffffff" }} key={el.index}>
                      {el.icon}
                    </IconButton>
                  </Box>
                  ) : (
                    <IconButton onClick={() => { setSelected(el.index); }} sx={{ width: "max-content", color: theme.palette.mode === "light" ? "#000000" : theme.palette.text.primary}} key={el.index}>
                      {el.icon}
                    </IconButton>
                  )
              )}
              <Divider sx={{ width: "48px" }} />
              {selected === 3 ? 
              <Box p={1} sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}>
                <IconButton sx={{ width: "max-content", color: "#ffffff" }}>
                  <Gear />
                </IconButton>
              </Box>
                :
              // <Box>
                <IconButton onClick={() => { setSelected(3); }} sx={{ width: "max-content", color: theme.palette.mode === "light" ? "#000000" : theme.palette.text.primary}}>
                  < Gear />
                </IconButton>
              // </Box>
              }

            </Stack>
          </Stack>

          <Stack spacing={4}>
            <AntSwitch onChange={() => {
              onToggleMode();
              }} 
              defaultChecked />
            {/* </AntSwitch> */}
            <Avatar src={faker.image.avatar()} />
          </Stack>

        </Stack>
      </Box>
  )
}

export default SideBar