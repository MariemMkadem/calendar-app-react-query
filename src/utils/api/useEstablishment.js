import {useQuery} from 'react-query';
import client from './apiClient';

function useEstablishment (establishmentId, options = { skip: false }) {
    const { data: establishment, isLoading: loading } = useQuery({
        queryKey: `single-establishment-${establishmentId}`,
        queryFn: () => client.get(`establishment/${establishmentId}`).then(({data}) => data),
        ...options,
        enabled: !options.skip,
    });

    return { establishment, loading };
}


export default useEstablishment;
