import {useQuery} from 'react-query';
import client from './apiClient';

function useCoach (coachId, options = { skip: false }) {
    const { data: coach, isLoading: loading } = useQuery({
        queryKey: `single-coach-${coachId}`,
        queryFn: () => client.get(`coach/${coachId}`).then(({data}) => data),
        ...options,
        enabled: !options.skip,
    });

    return { coach, loading };
}


export default useCoach;
