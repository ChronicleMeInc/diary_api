/**
* DiaryEntry.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  table_name: 'diary_entries',
  attributes: {
      date: {
        type: "datetime",
        defaultsTo: Date,
        required: true
      },
      cheerfulness_normalized_score: {
        type: "float"
      },
      cheerfulness_raw_score: {
        type: "float"
      },
      cheerfulness_words: {
        type: "array"
      },
      negative_normalized_score: {
        type: "float"
      },
      negative_raw_score: {
        type: "float"
      },
      negative_words: {
        type: "array"
      },
      anger_normalized_score: {
        type: "float"
      },
      anger_raw_score: {
        type: "float"
      },
      anger_words: {
        type: "array"
      },
      raw_speech_to_test: {
        type: "json"
      },
      high_confidence_words: {
        type: "json"
      }
    }

};

