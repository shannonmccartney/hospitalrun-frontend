import Ember from 'ember';
import SelectValues from 'hospitalrun/utils/select-values';
export default Ember.Mixin.create({
  defaultInventoryTypes: [
    'Medication',
    'Supply'
  ],

  inventoryTypes: function() {
    let defaultInventoryTypes = this.get('defaultInventoryTypes'),
      inventoryTypeList = this.get('inventoryTypeList'),
      typeList;
    if (Ember.isEmpty(inventoryTypeList)) {
      typeList = defaultInventoryTypes;
    } else {
      typeList = inventoryTypeList;
    }
    typeList = SelectValues.selectValues(typeList);
    return typeList;
  }.property('inventoryTypeList', 'defaultInventoryTypes')
});
