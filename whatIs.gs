function gClassFolders_whatIs() {
  var app = UiApp.createApplication().setHeight(550);
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var panel = app.createVerticalPanel();
  var octiGrid = app.createGrid(1, 2);
  var image = app.createImage(this.GCLASSICONURL);
  image.setHeight("100px");
  var label = app.createLabel("gClassFolders V2.0: " + t("Create a paperless classroom or school with automatically-created folders for students."));
  label.setStyleAttribute('fontSize', '1.5em').setStyleAttribute('fontWeight', 'bold');
  octiGrid.setWidget(0, 0, image);
  octiGrid.setWidget(0, 1, label);
  var scrollPanel = app.createScrollPanel().setHeight("250px").setStyleAttribute("backgroundColor","whiteSmoke").setStyleAttribute('padding', '10px');
  var html = "<h3>" + t("Features") + "</h3>";
  html += "<ul><li>" + t("Use a spreadsheet with your course roster(s) to create the following folder hierarchy for each class") + "</li>";
  html += "<ul><li><strong>" + t("Class Root Folder") + "</strong> - " + t("Holds all files and folders associated with a course.") + "</li>";
  html += "<ul><li><strong>" + t("Teacher Folder") + "</strong> - " + t("View/edit only to teacher.") + "</li>";
  html += "<li><strong>" + t("Class Edit Folder") + "</strong> - " + t("These files are editable by anyone in the class") + "</li>";
  html += "<li><strong>" + t("Class View Folder") + "</strong> - " + t("These files are view-only to anyone in the class") + "</li>";
  html += "<li><strong>" + t("Student Dropbox Folder") + "</strong> - " + t("Folder containing individual student folders.") + "</li>";
  html += "<ul><li><strong>" + t("Class Period Folders") + "</strong> - " + t("Optional, organizes student folders by period") + "</li>";
  html += "<ul><li><strong>" + t("Student Dropbox Folders") + "</strong> - " + t("Contains all per-student folders. Shared only between student and teacher.") + "</li></ul>";
  html += "</ul></ul></ul>";
  html += "<li>" + t("Integrates with other Scripts like Doctopus via the web app, gClassHub. Lets teachers create and distribute differentiated worksheets and projects into student folders.") + "</li>";
  html += "<li>" + t("Can be run in SINGLE TEACHER MODE or SCHOOL MODE.") + "</li>";
  html += "<ul><li><strong>" + t("Single Teacher Mode") + "</strong> - Meant for one teacher running gClassFolders from their own account. Single Teacher Mode is simpler, but offers fewer options for managing and archiving student work over time and across a student's classes if they have multiple teachers.</li>";
  html += "<li><strong>" + t("School Mode") + "</strong> - School Mode is meant to be run from a \"Role Account\" -- a domain account dedicated to managing and archiving all student course work over multiple semesters or years. School mode is a better choice for multiple teachers, and helps organize all student work into career portfolios. Creates an \"Active Classes\" and \"Archived Classes\" folder for each student and teacher to organize multiple class folders over time.</li></ul>";
  html += "<li>" + t("Can be run multiple times if new students and/or courses need to be added.") + "</li>";
  html += "<li>" + t("Includes a tool to add additional teachers and school aides to student folders, and to move students between classes and drop students from a class.") + "</li>";
  html += "<li>" + t("Can archive all student folders at end-of term or year.") + "</li>";
  html += "<li>" + t("Fully internationalized interface can run in over 70 languages.") + "</li>";
  scrollPanel.add(app.createHTML(html));
  var sponsorLabel = app.createLabel(t("Built by educators:"));
  var authorPanel = app.createVerticalPanel().add(app.createLabel("Bjorn Behrendt").setStyleAttribute('textAlign', 'center')).add(app.createLabel("and").setStyleAttribute('textAlign', 'center')).add(app.createLabel('Andrew Stillman').setStyleAttribute('textAlign', 'center'));
  var youpdImage = app.createImage("http://www.youpd.org/sites/default/files/acquia_commons_logo37.png").setWidth("225px");
  var supportLink = app.createAnchor(t('Read more about gClassFolders!'), 'http://www.gclassfolders.com/home');
  var supportLink2 = app.createAnchor(t('Learn about other great Google Apps Scripts and instructional hacks by innovative educators!'), 'http://youpd.org');
  var bottomGrid = app.createGrid(3, 3).setCellPadding(5);
  bottomGrid.setWidget(0, 0, sponsorLabel);
  bottomGrid.setWidget(1, 0, authorPanel);
  bottomGrid.setWidget(1, 1, app.createLabel(t('with support from')));
  bottomGrid.setWidget(1, 2, youpdImage);
  bottomGrid.setWidget(2, 0, supportLink);
  bottomGrid.setWidget(2, 2, supportLink2);
  app.add(octiGrid);
  panel.add(scrollPanel);
  panel.add(bottomGrid);
  app.add(panel);
  ss.show(app);
  return app;                                                                    
}
