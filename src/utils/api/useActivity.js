import {useQuery} from 'react-query';
import client from './apiClient';

function useActivity (activityId, options = { skip: false }) {
    const { data: activity, isLoading: loading } = useQuery({
        queryKey: `single-activity-${activityId}`,
        queryFn: () => client.get(`meta-activity/${activityId}`).then(({data}) => data),
        ...options,
        enabled: !options.skip,
    });

    return { activity, loading };
}


export default useActivity;
