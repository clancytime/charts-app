# Charts \(Awful name, I know\)

Create a configurable grid of charts that are pulling data from a mysql database. Or at least that's what this will be someday. What it's using:

* [MEAN](http://www.mean.io/) - As of right now I'm adding pieces of this one at a time to understand each process and remove/add anything needed for the project.
* [Gridster.js](http://gridster.net/) - great plugin for drag-and-drop grid layouts.
* [Charts.js](http://www.chartjs.org/) - simple, elegant HTML5 chart library \(not implemented yet\)

### TODO

* Add Grids model
  * store grids, layout for sessions
* gridster layout
  * ability to add grids, modify size and location
* MySQL plugin addition
* User lockdown
  * Admins - Can edit grid
  * All others - lock down gridster to view only