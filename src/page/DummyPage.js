import TablePagination from "../component/TablePagination";
import {
  KICKSTARTER_API,
  KICKSTARTER_TABLE_HEADER,
  KICKSTARTER_TABLE_LOADER,
  KICKSTARTER_TABLE_SIZE,
} from "../constants";
import useGetKickstarter from "../queries/useGetKickstarter";

function DummyPage() {
  const { data, isLoading } = useGetKickstarter(KICKSTARTER_API);

  if (isLoading) {
    return <div>{KICKSTARTER_TABLE_LOADER}</div>;
  }

  return (
    <TablePagination
      data={data}
      headers={KICKSTARTER_TABLE_HEADER}
      size={KICKSTARTER_TABLE_SIZE}
    />
  );
}

export default DummyPage;
