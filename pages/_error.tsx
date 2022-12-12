import { NextPageContext } from 'next';

interface ErrorComponentProps {
  statusCode?: number;
  message?: string;
}

const Error = ({ statusCode, message }: ErrorComponentProps) => {

  return (
    <div>
      <h3>Error Page</h3>
      <div> statusCode : {statusCode}</div>
      <div> message : {message}</div>
    </div>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  const message = res ? res.statusMessage : err ? err.message : '';
  return { statusCode, message };
};

export default Error;
