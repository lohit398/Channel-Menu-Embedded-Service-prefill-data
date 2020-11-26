Setup Guide for Prefilling Pre-chat Form when Having an embedded service in a Channel Menu 

1) In the channel menu configuration (Setup->Embedded Service->Channel Menu->"Your_Channel_Menu_Name"):
  Choose View.
  Code Settings.
  Add Code setting.
    Field Values:
      Code Setting Name=SnapinsSnippetSettingsFile
      Type=Settings File
      S tatic Resource=DE_snapinsSnippetSettingsFile
      
2) Add “SnapinsSnippetSettingsFile” to Code Settings Name in the Channel Menu component settings.

3) Add the “Store User Details” component to the community page.

Creators:
Jeff Hunt - j.hunt@salsforce.com
Lohit Botta - lohit.b@salesforce.com
