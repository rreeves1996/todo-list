import React, { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
//   MDBBadge
} from 'mdb-react-ui-kit';
import ThisWeek from './tabs/ThisWeek'
import NextWeek from './tabs/NextWeek'
import Etc from './tabs/Etc'

export default function TabBar() {
  const [basicActive, setBasicActive] = useState('tab1');

  const handleBasicClick = (tab) => {
    if (tab === basicActive) {
      return;
    }

    setBasicActive(tab);
  };

  return (
    <>
        <div className="tab-container">
            <MDBTabs className='mb-3 tabs'>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                        Tab 1
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
                        Tab 2
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
                        Tab 3
                    </MDBTabsLink>
                </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>
                <MDBTabsPane className='this-week tab-content' show={basicActive === 'tab1'}>
                    <ThisWeek />
                </MDBTabsPane>
                <MDBTabsPane className='next-week tab-content' show={basicActive === 'tab2'}>
                    <NextWeek />
                </MDBTabsPane>
                <MDBTabsPane className='etc tab-content' show={basicActive === 'tab3'}>
                    <Etc />
                </MDBTabsPane>
            </MDBTabsContent>
        </div>
    </>
  );
}