import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name, dimensions, time) {
    return { name, dimensions, time };
}

const rows = [
    createData("2cm Cube Standard Low Quality", "2.029 x 2.014 x 1.972 (WxHxL)", "21.29"),
    createData('2cm Cube Standard Standard Quality', "2.003 x 2.013 x 1.964 (WxHxL)", "27.02"),
    createData('2cm Cube Standard Super Quality', "2.016 x 2.010 x 1.986 (WxHxL)", "30.58"),
    createData('2cm Cube Concentric Top & Bottom', "2.003 x 2.009 x 1.971 (WxHxL)", "48.26"),
    createData('3cm Tube Single Wall Extrusion', "2.985 x 2.964 (DxH)", "45.35"),
    createData('3cm Tube Double Wall Extrusion, Random Z Seam', "3.092 x 2.966 (DxH)", "45.35"),
    createData('3cm Cylinder 0.1mm Tolerance', "2.972 x 2.973 (DxH)", "53.20"),
    createData('3cm Cylinder 0.001mm Tolerance', "2.995 x 2.962 (DxH)", "53.55"),
    createData('3cm Cylinder Spiralize Outer Contour', "2.992 x 2.982 (DxH)", "31.17"),
    createData('3cm Cylinder On Side', "3.016 x 3.032 (DxH)", "1:03.10"),
    createData("2cm Cube Hollow Core Trial 1", "2.001 x 1.996 x 1.977 (WxHxL); 0.945 Hole (D)", "1:01.24"),
    createData("2cm Cube Hollow Core Trial 2", "1.995 x 2.000 x 1.977 (WxHxL); 0.968 Hole (D)", "1:01.26"),
    createData("2cm Cube Hollow Core Trial 3", "1.989 x 1.992 x 1.972 (WxHxL); 0.976 Hole (D)", "45.10"),
    createData("2cm Cube Hollow Core Trial 4", "1.994 x 2.003 x 1.990 (WxHxL); 1.066 Hole (D)", "1:29.38"),
    createData("2cm Cube Hollow Core Trial 5", "2.004 x 2.003 x 1.996 (WxHxL); 1.139 Hole (D)", "1:29.38"),
    createData("2cm Cube Hollow Core Trial 6", "1.999 x 2.003 x 1.998 (WxHxL); 1.000 Hole (D)", "49.56"),

];

export default function BasicTable() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Print</TableCell>
                        <TableCell align="right">Dimensions (cm)&nbsp;</TableCell>
                        <TableCell align="right">Time to Print (h:m.s)&nbsp;</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.dimensions}</TableCell>
                            <TableCell align="right">{row.time}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}