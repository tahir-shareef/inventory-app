import React from 'react';
import { Grid } from '@mui/material';
import Card from '../card/Card';

import CanvasJSReact from '@canvasjs/react-charts';

let CanvasJSChart = CanvasJSReact.CanvasJSChart;

const GraphsRow = () => {
  const options1 = {
    animationEnabled: true,
    exportEnabled: true,
    theme: 'light2', //"light1", "dark1", "dark2"
    title: {
      text: "Today's Data"
    },
    axisY: {
      includeZero: true
    },
    data: [
      {
        type: 'column', //change type to bar, line, area, pie, etc
        //indexLabel: "{y}", //Shows y value on all Data Points
        indexLabelFontColor: '#5A5757',
        indexLabelPlacement: 'outside',
        dataPoints: [
          { x: 10, y: 71 },
          { x: 20, y: 55 },
          { x: 30, y: 50 },
          { x: 40, y: 65 },
          { x: 50, y: 71 },
          { x: 60, y: 68 },
          { x: 70, y: 38 },
          { x: 80, y: 92, indexLabel: 'Highest' },
          { x: 90, y: 54 },
          { x: 100, y: 60 },
          { x: 110, y: 21 },
          { x: 120, y: 49 },
          { x: 130, y: 36 }
        ]
      }
    ]
  };

  const options2 = {
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: 'Top Selling Products'
    },
    data: [
      {
        type: 'pie',
        startAngle: 75,
        toolTipContent: '<b>{label}</b>: {y}%',
        showInLegend: 'true',
        legendText: '{label}',
        indexLabelFontSize: 16,
        indexLabel: '{label} - {y}%',
        dataPoints: [
          { y: 18, label: 'FlavorBurst Chips' },
          { y: 49, label: 'CrunchDelight Cookies' },
          { y: 9, label: 'YumBerry' },
          { y: 5, label: 'SpicyTango' },
        ]
      }
    ]
  };

  return (
    <Grid container spacing={2}>
      <Grid xs={8} item>
        <Card sx={{ display: 'block' }} fullWidth>
          <div>
            <CanvasJSChart options={options1} />
          </div>
        </Card>
      </Grid>
      <Grid xs={4} item>
        <Card sx={{ display: 'block' }} fullWidth>
          <CanvasJSChart options={options2} />
        </Card>
      </Grid>
    </Grid>
  );
};

export default GraphsRow;
