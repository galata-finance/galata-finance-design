import {useTranslation} from 'react-i18next';
import {Card} from './card';
import {SectionHeader} from './page-header';
import {DeltaBadge} from './delta-badge';
import {Table,TableBody,TableCell,TableHead,TableHeader,TableRow} from './table';
export interface FinancialStatementTableProps {
 title:string;currentLabel:string;previousLabel:string;unitLabel?:string;
 rows:{label:string;currentText:string;previousText:string;changePct:number|null}[];
}
/** Presentation only. Currency, scale and change percentages are supplied by the API/caller. */
export function FinancialStatementTable({title,currentLabel,previousLabel,unitLabel,rows}:FinancialStatementTableProps){
 const {t,i18n}=useTranslation();
 return <Card className="min-w-0 gap-3 bg-surface p-4">
  <SectionHeader title={title} subtitle={unitLabel}/>
  <Table aria-label={title}>
   <TableHeader><TableRow><TableHead className="min-w-40">{t('financials.item')}</TableHead><TableHead className="text-right">{currentLabel}</TableHead><TableHead className="text-right">{previousLabel}</TableHead><TableHead className="text-right">{t('financials.change')}</TableHead></TableRow></TableHeader>
   <TableBody>{rows.map(row=><TableRow key={row.label}><TableCell className="max-w-48 whitespace-normal font-medium">{row.label}</TableCell><TableCell className="whitespace-nowrap text-right tabular-nums">{row.currentText}</TableCell><TableCell className="whitespace-nowrap text-right tabular-nums">{row.previousText}</TableCell><TableCell className="text-right">{row.changePct===null?<span className="text-muted-foreground">—</span>:<DeltaBadge value={row.changePct} label={`${row.changePct.toLocaleString(i18n.language,{minimumFractionDigits:2,maximumFractionDigits:2,signDisplay:'exceptZero'})}%`} variant="inline"/>}</TableCell></TableRow>)}</TableBody>
  </Table>
 </Card>;
}
