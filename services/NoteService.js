const fs = require('fs');
const util = require('util');

/**
 * We want to use async/await with fs.readFile - util.promisfy gives us that
 */
const readFile = util.promisify(fs.readFile);

/**
 * Logic for fetching Note information
 */
class NoteService {
  /**
   * Constructor
   * @param {*} datafile Path to a JSOn file that contains the note data
   */
  constructor(datafile) {
    this.datafile = datafile;
  }

    /**
   * Get a list of note
   */
  async getList() {
    const data = await this.getData();
    return data.map(note => {
      return {
        name: note.name,
        shortname: note.shortname,
        title: note.title,
        summary: note.summary,
      };
    });
  }

  /**
   * Fetches note data from the JSON file provided to the constructor
   */
  async getData() {
    const data = await readFile(this.datafile, 'utf8');
    return JSON.parse(data).note;
  }
}

module.exports = NoteService;
