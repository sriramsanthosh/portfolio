
import Alert from '@mui/material/Alert';

const AlertMUI = (params) => {
    return (
        <Alert severity={params.status}>
            {params.message}
        </Alert>
    );
}

export default AlertMUI;