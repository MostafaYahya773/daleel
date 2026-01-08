import getStudentsUnquiries from '../../../../lib/getStudentsUnquiries';
import { StudentProps } from '../../interfaces';
import StudentsMessages from './StudentsMessages/StudentsMessages';

const StudentsInquiries = async () => {
  const data: StudentProps[] = await getStudentsUnquiries();

  return <StudentsMessages data={data} />;
};

export default StudentsInquiries;
