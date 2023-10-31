import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-mukha4-город', 'Unit | Serializer | i-i-s-mukha4-город', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-mukha4-город',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-mukha4-город',
    'model:i-i-s-mukha4-здание',
    'model:i-i-s-mukha4-метеостанция',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
