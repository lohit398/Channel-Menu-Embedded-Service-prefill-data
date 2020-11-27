Setup Instructions

Channel Menu - Pre-chat Form Default Values

Instructions

1) Configure the Channel Menu

Visit the Channel Menu Configuration page by going to: Setup → Embedded Service → Channel Menu

Add a new Code Setting entry for your Channel Menu

* For your Channel Menu of choice, choose “View” on the drop-down menu to the right.
    * Under "Code Settings" click "Edit".
    * Click “Add Code Setting”.
    * Add the following field values:
        * Field name: "Code Setting Name" → "SnapinsSnippetSettingsFile"
        * Field name: "Type" → "Settings File"
        * Field name: "Static Resource" → "DE_snapinsSnippetSettingsFile"
    * Click "Save"

Ensure the chat channel name is "Chat"

* Under "Menu Setup", click "Edit"
    * Click into your chat menu item
        * Ensure the "Menu Item Name" field value is "Chat" with the 'C' Capitalized. Note: this setup requirement will be eliminated in a future release.
    * Click "Save" if you made a change.



2. Set up the Channel Menu in your Community

* Edit your Community
    * Open the "Channel Menu" component's settings
        * Set the "Code Settings Name" field's value to “SnapinsSnippetSettingsFile”
        * Add the “Store User Details” component to the community page
    * Publish your community
    * Log your community user off and on again


Note: Please make sure the Menu Item Name of the WebChat is "Chat" (with Capital C at the head)


Creators:
Jeff Hunt - j.hunt@salsforce.com
Lohit Botta - lohit.b@salesforce.com
