gdjs.start_32screenCode = {};
gdjs.start_32screenCode.localVariables = [];
gdjs.start_32screenCode.GDNewSpriteObjects1= [];
gdjs.start_32screenCode.GDNewSpriteObjects2= [];
gdjs.start_32screenCode.GDNewSprite2Objects1= [];
gdjs.start_32screenCode.GDNewSprite2Objects2= [];


gdjs.start_32screenCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.start_32screenCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.start_32screenCode.GDNewSprite2Objects1.length;i<l;++i) {
    if ( gdjs.start_32screenCode.GDNewSprite2Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.start_32screenCode.GDNewSprite2Objects1[k] = gdjs.start_32screenCode.GDNewSprite2Objects1[i];
        ++k;
    }
}
gdjs.start_32screenCode.GDNewSprite2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "scene 1", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Iframe Soulful Sounds of Rajasthan _ Traditional Rajasthani Instrumental for Stress-free Mood [XAXnwkmc6xU]2.mp3", false, 70, 1);
}}

}


};

gdjs.start_32screenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.start_32screenCode.GDNewSpriteObjects1.length = 0;
gdjs.start_32screenCode.GDNewSpriteObjects2.length = 0;
gdjs.start_32screenCode.GDNewSprite2Objects1.length = 0;
gdjs.start_32screenCode.GDNewSprite2Objects2.length = 0;

gdjs.start_32screenCode.eventsList0(runtimeScene);
gdjs.start_32screenCode.GDNewSpriteObjects1.length = 0;
gdjs.start_32screenCode.GDNewSpriteObjects2.length = 0;
gdjs.start_32screenCode.GDNewSprite2Objects1.length = 0;
gdjs.start_32screenCode.GDNewSprite2Objects2.length = 0;


return;

}

gdjs['start_32screenCode'] = gdjs.start_32screenCode;
