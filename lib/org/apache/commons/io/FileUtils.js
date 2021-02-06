export default class FileUtils {
    static get $javaClass() {
        return Java.type('org.apache.commons.io.FileUtils');
    }
    static $isInstance(obj) {
        return obj instanceof FileUtils.$javaClass;
    }
    constructor(...args) {
        return new FileUtils.$javaClass(...args);
    }
    static get EMPTY_FILE_ARRAY() {
        return FileUtils.$javaClass.EMPTY_FILE_ARRAY;
    }
    static get ONE_EB() {
        return FileUtils.$javaClass.ONE_EB;
    }
    static get ONE_EB_BI() {
        return FileUtils.$javaClass.ONE_EB_BI;
    }
    static get ONE_GB() {
        return FileUtils.$javaClass.ONE_GB;
    }
    static get ONE_GB_BI() {
        return FileUtils.$javaClass.ONE_GB_BI;
    }
    static get ONE_KB() {
        return FileUtils.$javaClass.ONE_KB;
    }
    static get ONE_KB_BI() {
        return FileUtils.$javaClass.ONE_KB_BI;
    }
    static get ONE_MB() {
        return FileUtils.$javaClass.ONE_MB;
    }
    static get ONE_MB_BI() {
        return FileUtils.$javaClass.ONE_MB_BI;
    }
    static get ONE_PB() {
        return FileUtils.$javaClass.ONE_PB;
    }
    static get ONE_PB_BI() {
        return FileUtils.$javaClass.ONE_PB_BI;
    }
    static get ONE_TB() {
        return FileUtils.$javaClass.ONE_TB;
    }
    static get ONE_TB_BI() {
        return FileUtils.$javaClass.ONE_TB_BI;
    }
    static get ONE_YB() {
        return FileUtils.$javaClass.ONE_YB;
    }
    static get ONE_ZB() {
        return FileUtils.$javaClass.ONE_ZB;
    }
    static byteCountToDisplaySize(...args) {
        return FileUtils.$javaClass.byteCountToDisplaySize(...args);
    }
    static checksum(...args) {
        return FileUtils.$javaClass.checksum(...args);
    }
    static checksumCRC32(...args) {
        return FileUtils.$javaClass.checksumCRC32(...args);
    }
    static cleanDirectory(...args) {
        return FileUtils.$javaClass.cleanDirectory(...args);
    }
    static contentEquals(...args) {
        return FileUtils.$javaClass.contentEquals(...args);
    }
    static contentEqualsIgnoreEOL(...args) {
        return FileUtils.$javaClass.contentEqualsIgnoreEOL(...args);
    }
    static convertFileCollectionToFileArray(...args) {
        return FileUtils.$javaClass.convertFileCollectionToFileArray(...args);
    }
    static copyDirectory(...args) {
        return FileUtils.$javaClass.copyDirectory(...args);
    }
    static copyDirectoryToDirectory(...args) {
        return FileUtils.$javaClass.copyDirectoryToDirectory(...args);
    }
    static copyFile(...args) {
        return FileUtils.$javaClass.copyFile(...args);
    }
    static copyFileToDirectory(...args) {
        return FileUtils.$javaClass.copyFileToDirectory(...args);
    }
    static copyInputStreamToFile(...args) {
        return FileUtils.$javaClass.copyInputStreamToFile(...args);
    }
    static copyToDirectory(...args) {
        return FileUtils.$javaClass.copyToDirectory(...args);
    }
    static copyToFile(...args) {
        return FileUtils.$javaClass.copyToFile(...args);
    }
    static copyURLToFile(...args) {
        return FileUtils.$javaClass.copyURLToFile(...args);
    }
    static deleteDirectory(...args) {
        return FileUtils.$javaClass.deleteDirectory(...args);
    }
    static deleteQuietly(...args) {
        return FileUtils.$javaClass.deleteQuietly(...args);
    }
    static directoryContains(...args) {
        return FileUtils.$javaClass.directoryContains(...args);
    }
    static forceDelete(...args) {
        return FileUtils.$javaClass.forceDelete(...args);
    }
    static forceDeleteOnExit(...args) {
        return FileUtils.$javaClass.forceDeleteOnExit(...args);
    }
    static forceMkdir(...args) {
        return FileUtils.$javaClass.forceMkdir(...args);
    }
    static forceMkdirParent(...args) {
        return FileUtils.$javaClass.forceMkdirParent(...args);
    }
    static getFile(...args) {
        return FileUtils.$javaClass.getFile(...args);
    }
    static getTempDirectory(...args) {
        return FileUtils.$javaClass.getTempDirectory(...args);
    }
    static getTempDirectoryPath(...args) {
        return FileUtils.$javaClass.getTempDirectoryPath(...args);
    }
    static getUserDirectory(...args) {
        return FileUtils.$javaClass.getUserDirectory(...args);
    }
    static getUserDirectoryPath(...args) {
        return FileUtils.$javaClass.getUserDirectoryPath(...args);
    }
    static isFileNewer(...args) {
        return FileUtils.$javaClass.isFileNewer(...args);
    }
    static isFileOlder(...args) {
        return FileUtils.$javaClass.isFileOlder(...args);
    }
    static isSymlink(...args) {
        return FileUtils.$javaClass.isSymlink(...args);
    }
    static iterateFiles(...args) {
        return FileUtils.$javaClass.iterateFiles(...args);
    }
    static iterateFilesAndDirs(...args) {
        return FileUtils.$javaClass.iterateFilesAndDirs(...args);
    }
    static lineIterator(...args) {
        return FileUtils.$javaClass.lineIterator(...args);
    }
    static listFiles(...args) {
        return FileUtils.$javaClass.listFiles(...args);
    }
    static listFilesAndDirs(...args) {
        return FileUtils.$javaClass.listFilesAndDirs(...args);
    }
    static moveDirectory(...args) {
        return FileUtils.$javaClass.moveDirectory(...args);
    }
    static moveDirectoryToDirectory(...args) {
        return FileUtils.$javaClass.moveDirectoryToDirectory(...args);
    }
    static moveFile(...args) {
        return FileUtils.$javaClass.moveFile(...args);
    }
    static moveFileToDirectory(...args) {
        return FileUtils.$javaClass.moveFileToDirectory(...args);
    }
    static moveToDirectory(...args) {
        return FileUtils.$javaClass.moveToDirectory(...args);
    }
    static openInputStream(...args) {
        return FileUtils.$javaClass.openInputStream(...args);
    }
    static openOutputStream(...args) {
        return FileUtils.$javaClass.openOutputStream(...args);
    }
    static readFileToByteArray(...args) {
        return FileUtils.$javaClass.readFileToByteArray(...args);
    }
    static readFileToString(...args) {
        return FileUtils.$javaClass.readFileToString(...args);
    }
    static readLines(...args) {
        return FileUtils.$javaClass.readLines(...args);
    }
    static sizeOf(...args) {
        return FileUtils.$javaClass.sizeOf(...args);
    }
    static sizeOfAsBigInteger(...args) {
        return FileUtils.$javaClass.sizeOfAsBigInteger(...args);
    }
    static sizeOfDirectory(...args) {
        return FileUtils.$javaClass.sizeOfDirectory(...args);
    }
    static sizeOfDirectoryAsBigInteger(...args) {
        return FileUtils.$javaClass.sizeOfDirectoryAsBigInteger(...args);
    }
    static toFile(...args) {
        return FileUtils.$javaClass.toFile(...args);
    }
    static toFiles(...args) {
        return FileUtils.$javaClass.toFiles(...args);
    }
    static toURLs(...args) {
        return FileUtils.$javaClass.toURLs(...args);
    }
    static touch(...args) {
        return FileUtils.$javaClass.touch(...args);
    }
    static waitFor(...args) {
        return FileUtils.$javaClass.waitFor(...args);
    }
    static write(...args) {
        return FileUtils.$javaClass.write(...args);
    }
    static writeByteArrayToFile(...args) {
        return FileUtils.$javaClass.writeByteArrayToFile(...args);
    }
    static writeLines(...args) {
        return FileUtils.$javaClass.writeLines(...args);
    }
    static writeStringToFile(...args) {
        return FileUtils.$javaClass.writeStringToFile(...args);
    }
}
