import { Page } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/inertia-react';
import React from 'react';
import { InertiaRouteProps } from '../../Shared/Interfaces';
import Table from '../../Shared/Table';
import TableJSON from '../../Shared/TableJSON';

// interface PanelPageProps {
// : ;
// }

const PanelPage = () => {
    const { title, data } = usePage<Page & InertiaRouteProps>().props;
    console.log(data)

        return (
            <>
                {/* <div> <TableJSON data={'data'} isActiveHref={false} /></div> */}
            </>
        )
};
export default PanelPage;
