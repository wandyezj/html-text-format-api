declare namespace manipulation {


    interface section {
        /**
         * Where the seection of text is
         * [start, end)
         */
        start?:number;
        end?: number;
    }

    /**
     * Block represents a string of text
     */
    interface updateblock<T> {    
        /**
         * update a section of text. The only API needed to manipulate the contents of the text.
         * 
         * start indicates the start index to insert before
         * end determins the number of characters to replace
         * 
         * Examples:
         * 
         * 
         * The text string:
         * "01234567"
         * "Hi World"
         * 
         * The insertion string:
         * "insert"
         * 
         * insert at front
         * {start: 0, end: 0} -> "insertHi World"
         * 
         * replacement
         * {start: 0, end: 2} -> "insert World"
         * 
         * insert at index
         * {start: 2, end: 0} -> "Hiinsert World"
         * 
         * insert at end
         * {start: 8, end: 0} -> "Hi Worldinsert"
         */
        update(section: section, value: T): void;
    }

    /**
     * Define an interface for a block of text.
     */
    interface textblock extends updateblock<string> {

        /**
         * get the current text of the string
         */
        text(): string;
        

    }


    enum bold {
        bolded
    }

    // formats are applied to sections of text
    // a format can have all sorts of properties
    interface format{

    }

    interface formatsection extends section {
        format: format;
    }

    interface formatblock extends updateblock<format> {

        formats(section: section): formatsection[];

        /**
         * figure out which secions a specific format is applied to.
         * 
         * @return list of sections the format is applied to (all format properties must be true)
         */
        queryFormat(section: section, format: format): section[];
    }




}
