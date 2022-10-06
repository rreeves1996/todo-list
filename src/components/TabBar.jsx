import React, { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
//   MDBBadge
} from 'mdb-react-ui-kit';

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
      <MDBTabs className='mb-3'>
        <MDBTabsItem>
            <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                {/* <MDBBadge pill color='danger'>!</MDBBadge> */}
                <span>
                    Tab 1
                </span>
            </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
            <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
                {/* <MDBBadge pill color='danger'>!</MDBBadge> */}
                <span>
                    Tab 2
                </span>
            </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
            <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
                {/* <MDBBadge pill color='danger'>!</MDBBadge> */}
                <span>
                    Tab 3
                </span>
            </MDBTabsLink>
        </MDBTabsItem>
        </MDBTabs>

        <MDBTabsContent>
            <MDBTabsPane show={basicActive === 'tab1'}>Tab 1 content</MDBTabsPane>
            <MDBTabsPane show={basicActive === 'tab2'}>Tab 2 content</MDBTabsPane>
            <MDBTabsPane show={basicActive === 'tab3'}>Tab 3 content</MDBTabsPane>
        </MDBTabsContent>
    </>
  );
}