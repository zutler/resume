import { parseISO, format } from 'date-fns';

export default function Date({ dateString }: { dateString: string | null }) {
  return dateString ? (
    <time dateTime={dateString}>{format(parseISO(dateString), 'MM/yyyy')}</time>
  ) : (
    <>Present</>
  );
}
