'use client'
import React, {useState} from 'react';
import Papa from 'papaparse';

export default function Csv() {
    const [data, setData] = useState<string[][]>([]);
    const [colWidths, setColWidths] = useState<number[]>([]);

    const calculateWidths = (data: string[][]) => {
        const widths = data[0]?.map((_, i) =>
            Math.max(...data.map(row => (row[i]?.length || 0) * 10), 20)
        );
        setColWidths(widths || []);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : undefined;
        if (file) {
            Papa.parse<string[]>(file, {
                complete: (result) => {
                    setData(result.data);
                    calculateWidths(result.data);
                },
            });
        }
    };

    const handleCellChange = (rowIndex: number, cellIndex: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const newData = [...data];
        newData[rowIndex][cellIndex] = e.target.value;
        setData(newData);
        calculateWidths(newData);
    };

    const handleKeyDown = (rowIndex: number, cellIndex: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        const maxRow = data.length - 1;
        const maxCell = data[0]?.length - 1;
        if (e.key === 'ArrowRight' && cellIndex < maxCell) {
            document.getElementById(`${rowIndex}-${cellIndex + 1}`)?.focus();
        } else if (e.key === 'ArrowLeft' && cellIndex > 0) {
            document.getElementById(`${rowIndex}-${cellIndex - 1}`)?.focus();
        } else if (e.key === 'ArrowDown' && rowIndex < maxRow) {
            document.getElementById(`${rowIndex + 1}-${cellIndex}`)?.focus();
        } else if (e.key === 'ArrowUp' && rowIndex > 0) {
            document.getElementById(`${rowIndex - 1}-${cellIndex}`)?.focus();
        }
    };

    return (
        <div className="container p-2">
            {!data.length ? (
                <div className="flex justify-center items-center h-screen">
                    <input
                        type="file"
                        accept=".csv"
                        onChange={handleFileChange}
                        className="p-2 mb-4 shadow cursor-pointer"
                    />
                </div>
            ) : (
                <table className="min-w-full bg-white border border-gray-200">
                    <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-100' : ''}>
                            <td style={{width: '100px', textAlign: 'center'}}
                                className="border-t border-gray-200 text-gray-600">{rowIndex + 1}</td>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className="border-t border-gray-200 text-gray-600">
                                    <input
                                        id={`${rowIndex}-${cellIndex}`}
                                        value={cell}
                                        onChange={(e) => handleCellChange(rowIndex, cellIndex, e)}
                                        onKeyDown={(e) => handleKeyDown(rowIndex, cellIndex, e)}
                                        style={{width: colWidths[cellIndex]}}
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
