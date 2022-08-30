/**  
 * Todo
 * @typedef {object} Todo 
 * @param {string} id - id of Todo
 * @param {string} content - content of Todo
 * @param {boolean} completed - Whether it is true or false to complete the todo
 * @param {string} category - category of Todo
 * @param {Array.<string>} tags - tags of Todo (optional)
 */

/**
 * Tags
 * @typeof {object} Tags
 * @param {string} tag - name of tag
 */

/**
 * toCreate
 * @function toCreate
 * @param {string} id - id of Todo
 * @param {string} content - content of Todo
 * @param {string} category - category of Todo
 * @param {Array.<string>} tags - tags of Todo (optional)
 * @returns {*}
 */
function toCreate(content) {}

/**
 * toRead
 * @function toRead
 * @param {string} content - content of Todo
 * @param {string} id - id of Todo
 * @returns {*}
 */
function toRead(id){}

/**
 * toUpdate
 * @function toUpdate
 * @param {string} content - content of Todo
 * @param {string} category - category of Todo
 * @param {Array.<string>} tags - tags of Todo (optional)
 * @returns {*}
 */
function toUpdate(tags){}

/**
 * toDelete
 * @function toDelete
 * @param {string} id - id of Todo
 * @param {string} content - content of Todo
 * @param {boolean} completed - Whether it is true or false to complete the todo
 * @param {string} category - category of Todo
 * @param {Array.<string>} tags - tags of Todo (optional)
 * @returns {*}
 */
function toDelete(id, tags){}