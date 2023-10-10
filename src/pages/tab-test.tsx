import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="Disease Profiles">
          <Tab label="Endometriosis" {...a11yProps(0)} />
          <Tab label="Ovarian Cancer" {...a11yProps(1)} />
          <Tab label="PCOS {...a11yProps(2)} />
		  <Tab label="Breast Cancer {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <h4> Common Symptoms </h4>
		Testing the thing this probably should work.
		<ul>
		<li> if this actually works its a miracle </li>
		<li> no clue though, we'll see. </li>
		<li> cause let's be real, my coding ability is tenuous at best </li>
		</ul>
		<h4> Current Diagnostic Techniques </h4>
		This does seem somehow to be working so no clue.
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
	  <CustomTabPanel value={value} index={3}>
        Item Four
      </CustomTabPanel>
    </Box>
  );
}