import React, { ReactElement } from 'react';

interface TableProps {
  children: ReactElement | ReactElement[] | string;
}

export function Table({ children }: TableProps) {
  return <table className="table w-full">{children}</table>;
}

export function Row({ children }: TableProps) {
  return <tr>{children}</tr>;
}

export function HeadingColumn({ children }: TableProps) {
  return (
    <th className="px-4 py-2 text-left text-white border-l border-gray-500 first:border-l-0 border-r-0">
      {children}
    </th>
  );
}

export function DataColumn({ children }: TableProps) {
  return (
    <td className="border-l first:border-l-0 border-r-0 border-gray-500">
      {children}
    </td>
  );
}
