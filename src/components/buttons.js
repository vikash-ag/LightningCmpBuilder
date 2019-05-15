import React from 'react';

import { Button, IconSettings } from '@salesforce/design-system-react';

const sldsButtons = () => {
    return(
        <IconSettings iconPath="/assets/icons">
			<div>
				<Button label="Brand" variant="brand" />

				<Button
					disabled
					label="Disabled"
					onClick={() => {
						console.log('Disabled Button Clicked');
					}}
					variant="brand"
				/>

				<Button label="Destructive" variant="destructive" title="Destructive action"/>

				<Button label="Outline Brand" variant="outline-brand" />

				<div
					style={{
						backgroundColor: '#16325c',
						padding: '10px',
						display: 'inline-block',
					}}
					className="-m-horizontal--small"
				>
					<Button inverse label="Inverse" variant="base" />
				</div>
			</div>
		</IconSettings>
    )
}

export default sldsButtons;