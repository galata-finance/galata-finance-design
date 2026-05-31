import * as React from 'react';

import { cn } from '../../lib/utils';
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from './table';

type Align = 'left' | 'right' | 'center';

export interface BaseColumnDef<TRow> {
  key: string;
  header: React.ReactNode;
  width?: number | string;
  minWidth?: number | string;
  align?: Align;
  headerAlign?: Align;
  className?: string | ((row: TRow) => string | undefined);
  headerClassName?: string;
  getCellProps?: (row: TRow) => React.TdHTMLAttributes<HTMLTableCellElement>;
  headerProps?: React.ThHTMLAttributes<HTMLTableCellElement>;
  render: (row: TRow) => React.ReactNode;
}

export interface BaseTableProps<TRow> {
  columns: BaseColumnDef<TRow>[];
  data: TRow[];
  rowKey: (row: TRow) => string;
  rowClassName?: (row: TRow) => string | undefined;
  getRowProps?: (row: TRow) => React.HTMLAttributes<HTMLTableRowElement>;
  rowAccentColor?: (row: TRow) => string | undefined;
  loading?: boolean;
  skeletonRows?: number;
  emptyNode?: React.ReactNode;
  compact?: boolean;
  className?: string;
  tableClassName?: string;
  headerRowClassName?: string;
}

function alignCls(align?: Align) {
  if (align === 'right') return 'text-right';
  if (align === 'center') return 'text-center';
  return 'text-left';
}

function sizeValue(value?: number | string) {
  if (value === undefined) return undefined;
  return typeof value === 'number' ? `${value}px` : value;
}

function columnStyle<TRow>(col: BaseColumnDef<TRow>, style?: React.CSSProperties) {
  return {
    width: sizeValue(col.width),
    minWidth: sizeValue(col.minWidth),
    ...style,
  };
}

function SkeletonCell({ compact, index }: { compact: boolean; index: number }) {
  return (
    <div
      className={cn(
        'h-3.5 animate-pulse rounded-md bg-border/60',
        compact ? 'my-0.5' : 'my-1',
      )}
      style={{ width: index === 0 ? '60%' : index === 1 ? '46%' : '34%' }}
    />
  );
}

export function BaseTable<TRow>({
  columns,
  data,
  rowKey,
  rowClassName,
  getRowProps,
  rowAccentColor,
  loading = false,
  skeletonRows = 6,
  emptyNode,
  compact = false,
  className,
  tableClassName,
  headerRowClassName,
}: BaseTableProps<TRow>) {
  const hasAccent = !!rowAccentColor;
  const visibleColumnCount = columns.length + (hasAccent ? 1 : 0);
  const cellPadding = compact ? 'px-3.5 py-3' : undefined;
  const headerPadding = compact ? 'px-3.5' : undefined;

  return (
    <div className={className}>
      <Table className={tableClassName}>
        <TableHeader>
          <TableRow className={headerRowClassName}>
            {hasAccent && <TableHead className={cn('w-8', headerPadding)} />}
            {columns.map((col) => (
              <TableHead
                {...col.headerProps}
                key={col.key}
                style={columnStyle(col, col.headerProps?.style)}
                className={cn(
                  headerPadding,
                  alignCls(col.headerAlign ?? col.align),
                  col.headerClassName,
                  col.headerProps?.className,
                )}
              >
                {col.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading ? (
            Array.from({ length: skeletonRows }).map((_, rowIndex) => (
              <TableRow key={`skeleton-${rowIndex}`} aria-hidden="true">
                {hasAccent && (
                  <TableCell className={cn('w-8', cellPadding)}>
                    <div className="h-[22px] w-[3px] animate-pulse rounded-[2px] bg-border/60" />
                  </TableCell>
                )}
                {columns.map((col, colIndex) => (
                  <TableCell
                    key={col.key}
                    className={cn(cellPadding, alignCls(col.align))}
                    style={columnStyle(col)}
                  >
                    <SkeletonCell compact={compact} index={colIndex} />
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : data.length === 0 && emptyNode !== undefined ? (
            <TableRow className="hover:bg-transparent">
              <TableCell
                colSpan={visibleColumnCount}
                className={cn('py-10 text-center text-sm text-muted-foreground', compact && 'py-8')}
              >
                {emptyNode}
              </TableCell>
            </TableRow>
          ) : data.length === 0 ? null : (
            data.map((row) => {
              const rowProps = getRowProps?.(row);
              const accentColor = rowAccentColor?.(row);

              return (
                <TableRow
                  {...rowProps}
                  key={rowKey(row)}
                  className={cn(rowProps?.className, rowClassName?.(row))}
                >
                  {hasAccent && (
                    <TableCell className={cn('w-8', cellPadding)}>
                      <div
                        className="h-[22px] w-[3px] rounded-[2px]"
                        style={{ backgroundColor: accentColor ?? 'transparent' }}
                      />
                    </TableCell>
                  )}
                  {columns.map((col) => {
                    const cellProps = col.getCellProps?.(row);

                    return (
                      <TableCell
                        {...cellProps}
                        key={col.key}
                        style={columnStyle(col, cellProps?.style)}
                        className={cn(
                          cellPadding,
                          alignCls(col.align),
                          typeof col.className === 'function' ? col.className(row) : col.className,
                          cellProps?.className,
                        )}
                      >
                        {col.render(row)}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
    </div>
  );
}
