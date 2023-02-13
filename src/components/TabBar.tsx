import React, { useState } from 'react';
import {
	MDBTabs,
	MDBTabsItem,
	MDBTabsLink,
	MDBTabsContent,
	MDBTabsPane,
} from 'mdb-react-ui-kit';
import ThisWeek from './ThisWeek';
import NextWeek from './NextWeek';
import Etc from './Etc';

export default function TabBar() {
	const [activeTab, setActiveTab] = useState('tab1');

	const handleBasicClick = (tab: string) => {
		if (tab === activeTab) {
			return;
		}

		setActiveTab(tab);
	};

	return (
		<>
			<div className='tab-container'>
				<MDBTabs className='mb-3 tabs'>
					<MDBTabsItem key='ThisWeek'>
						<MDBTabsLink
							onClick={() => handleBasicClick('tab1')}
							active={activeTab === 'tab1'}>
							This Week
						</MDBTabsLink>
					</MDBTabsItem>

					<MDBTabsItem key='NextWeek'>
						<MDBTabsLink
							onClick={() => handleBasicClick('tab2')}
							active={activeTab === 'tab2'}>
							Next Week
						</MDBTabsLink>
					</MDBTabsItem>

					<MDBTabsItem key='Etc'>
						<MDBTabsLink
							onClick={() => handleBasicClick('tab3')}
							active={activeTab === 'tab3'}>
							Etc
						</MDBTabsLink>
					</MDBTabsItem>
				</MDBTabs>

				<MDBTabsContent>
					<MDBTabsPane
						className='this-week tab-content'
						show={activeTab === 'tab1'}>
						<ThisWeek />
					</MDBTabsPane>

					<MDBTabsPane
						className='next-week tab-content'
						show={activeTab === 'tab2'}>
						<NextWeek />
					</MDBTabsPane>

					<MDBTabsPane className='etc tab-content' show={activeTab === 'tab3'}>
						<Etc />
					</MDBTabsPane>
				</MDBTabsContent>
			</div>
		</>
	);
}
