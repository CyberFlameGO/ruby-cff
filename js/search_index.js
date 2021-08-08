var search_data = {"index":{"searchIndex":["cff","entity","error","file","identifier","licensable","model","modelpart","person","reference","util","validatable","validationerror","add_language()","authors()","authors()","authors=()","authors=()","comment=()","contact()","contact()","contact=()","contact=()","date_accessed=()","date_downloaded=()","date_end=()","date_published=()","date_released=()","date_released=()","date_start=()","editors()","editors=()","editors_series()","editors_series=()","identifiers()","identifiers()","identifiers=()","identifiers=()","keywords()","keywords()","keywords=()","keywords=()","languages()","new()","new()","new()","new()","new()","new()","open()","patent_states()","patent_states=()","preferred_citation()","preferred_citation=()","read()","recipients()","recipients=()","references()","references=()","reset_languages()","senders()","senders=()","status=()","to_apalike()","to_bibtex()","translators()","translators=()","type=()","type=()","validate()","validate!()","write()","write()","changes","licence","readme"],"longSearchIndex":["cff","cff::entity","cff::error","cff::file","cff::identifier","cff::licensable","cff::model","cff::modelpart","cff::person","cff::reference","cff::util","cff::validatable","cff::validationerror","cff::reference#add_language()","cff::model#authors()","cff::reference#authors()","cff::model#authors=()","cff::reference#authors=()","cff::file#comment=()","cff::model#contact()","cff::reference#contact()","cff::model#contact=()","cff::reference#contact=()","cff::reference#date_accessed=()","cff::reference#date_downloaded=()","cff::entity#date_end=()","cff::reference#date_published=()","cff::model#date_released=()","cff::reference#date_released=()","cff::entity#date_start=()","cff::reference#editors()","cff::reference#editors=()","cff::reference#editors_series()","cff::reference#editors_series=()","cff::model#identifiers()","cff::reference#identifiers()","cff::model#identifiers=()","cff::reference#identifiers=()","cff::model#keywords()","cff::reference#keywords()","cff::model#keywords=()","cff::reference#keywords=()","cff::reference#languages()","cff::entity::new()","cff::file::new()","cff::identifier::new()","cff::model::new()","cff::person::new()","cff::reference::new()","cff::file::open()","cff::reference#patent_states()","cff::reference#patent_states=()","cff::model#preferred_citation()","cff::model#preferred_citation=()","cff::file::read()","cff::reference#recipients()","cff::reference#recipients=()","cff::model#references()","cff::model#references=()","cff::reference#reset_languages()","cff::reference#senders()","cff::reference#senders=()","cff::reference#status=()","cff::model#to_apalike()","cff::model#to_bibtex()","cff::reference#translators()","cff::reference#translators=()","cff::identifier#type=()","cff::reference#type=()","cff::file::validate()","cff::file::validate!()","cff::file::write()","cff::file#write()","","",""],"info":[["CFF","","CFF.html","","<p>This library provides a Ruby interface to manipulate CITATION.cff files. The\nprimary entry points are ...\n"],["CFF::Entity","","CFF/Entity.html","","<p>An Entity can represent different types of entities, e.g., a publishing\ncompany, or conference. Like ...\n"],["CFF::Error","","CFF/Error.html","","<p>Error is the base class for all errors raised by this library.\n"],["CFF::File","","CFF/File.html","","<p>File provides direct access to a CFF Model, with the addition of some\nfilesystem utilities.\n"],["CFF::Identifier","","CFF/Identifier.html","","<p>An Identifier represents an identifier in a CITATION.cff file.\n<p>Identifier implements all of the fields …\n"],["CFF::Licensable","","CFF/Licensable.html","","<p>Functionality to add licence(s) to parts of the CFF model.\n"],["CFF::Model","","CFF/Model.html","","<p>Model is the core data structure for a CITATION.cff file. It can be\naccessed direcly, or via File.\n<p>Model …\n"],["CFF::ModelPart","","CFF/ModelPart.html","","<p>ModelPart is the superclass of anything that makes up part of the CFF Model.\nThis includes Model, Person ...\n"],["CFF::Person","","CFF/Person.html","","<p>A Person represents a person in a CITATION.cff file. A Person might have a\nnumber of roles, such as author, ...\n"],["CFF::Reference","","CFF/Reference.html","","<p>Reference provides a reference pertaining to the software version or the\nsoftware itself, e.g., a software ...\n"],["CFF::Util","","CFF/Util.html","","<p>Util provides utility methods useful throughout the rest of the CFF library.\n<p>Util does not provide any …\n"],["CFF::Validatable","","CFF/Validatable.html","","<p>Methods to validate CFF files/models against a formal schema.\n"],["CFF::ValidationError","","CFF/ValidationError.html","","<p>ValidationError is raised when a CFF file fails validatedation. It\ncontains details of each failure that ...\n"],["add_language","CFF::Reference","CFF/Reference.html#method-i-add_language","(lang)","<p>Add a language to this Reference. Input is converted to the ISO 639-3\nthree letter language code, so ...\n"],["authors","CFF::Model","CFF/Model.html#method-i-authors","","<p>Return the list of authors for this citation. To add an author to the\nlist, use:\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">model</span>.<span class=\"ruby-identifier\">authors</span> <span class=\"ruby-operator\">&lt;&lt;</span> <span class=\"ruby-identifier\">author</span>\n</pre>\n"],["authors","CFF::Reference","CFF/Reference.html#method-i-authors","","<p>Return the list of authors for this Reference. To add an author to the\nlist, use:\n\n<pre>reference.authors &lt;&lt; ...</pre>\n"],["authors=","CFF::Model","CFF/Model.html#method-i-authors-3D","","<p>Replace the list of authors for this citation.\n<p>Authors can be a Person or Entity.\n"],["authors=","CFF::Reference","CFF/Reference.html#method-i-authors-3D","","<p>Replace the list of authors for this reference.\n<p>Authors can be a Person or Entity.\n"],["comment=","CFF::File","CFF/File.html#method-i-comment-3D","(comment)","<p>A comment to be inserted at the top of the resultant CFF file. This can\nbe supplied as a simple string ...\n"],["contact","CFF::Model","CFF/Model.html#method-i-contact","","<p>Return the list of contacts for this citation. To add a contact to the\nlist, use:\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">model</span>.<span class=\"ruby-identifier\">contact</span> <span class=\"ruby-operator\">&lt;&lt;</span> <span class=\"ruby-identifier\">contact</span>\n</pre>\n"],["contact","CFF::Reference","CFF/Reference.html#method-i-contact","","<p>Return the list of contacts for this Reference. To add a contact to the\nlist, use:\n\n<pre>reference.contact &lt;&lt; ...</pre>\n"],["contact=","CFF::Model","CFF/Model.html#method-i-contact-3D","","<p>Replace the list of contacts for this citation.\n<p>Contacts can be a Person or Entity.\n"],["contact=","CFF::Reference","CFF/Reference.html#method-i-contact-3D","","<p>Replace the list of contacts for this reference.\n<p>Contacts can be a Person or Entity.\n"],["date_accessed=","CFF::Reference","CFF/Reference.html#method-i-date_accessed-3D","(date)","<p>Set the <code>date-accessed</code> field. If a non-Date object is passed in it will\nbe parsed into a Date.\n"],["date_downloaded=","CFF::Reference","CFF/Reference.html#method-i-date_downloaded-3D","(date)","<p>Set the <code>date-downloaded</code> field. If a non-Date object is passed in it will\nbe parsed into a Date.\n"],["date_end=","CFF::Entity","CFF/Entity.html#method-i-date_end-3D","(date)","<p>Set the <code>date-end</code> field. If a non-Date object is passed in it will\nbe parsed into a Date.\n"],["date_published=","CFF::Reference","CFF/Reference.html#method-i-date_published-3D","(date)","<p>Set the <code>date-published</code> field. If a non-Date object is passed in it will\nbe parsed into a Date.\n"],["date_released=","CFF::Model","CFF/Model.html#method-i-date_released-3D","(date)","<p>Set the <code>date-released</code> field. If a non-Date object is passed in it will\nbe parsed into a Date.\n"],["date_released=","CFF::Reference","CFF/Reference.html#method-i-date_released-3D","(date)","<p>Set the <code>date-released</code> field. If a non-Date object is passed in it will\nbe parsed into a Date.\n"],["date_start=","CFF::Entity","CFF/Entity.html#method-i-date_start-3D","(date)","<p>Set the <code>date-start</code> field. If a non-Date object is passed in it will\nbe parsed into a Date.\n"],["editors","CFF::Reference","CFF/Reference.html#method-i-editors","","<p>Return the list of editors for this Reference. To add an editor to the\nlist, use:\n\n<pre>reference.editors &lt;&lt; ...</pre>\n"],["editors=","CFF::Reference","CFF/Reference.html#method-i-editors-3D","","<p>Replace the list of editors for this reference.\n<p>Editors can be a Person or Entity.\n"],["editors_series","CFF::Reference","CFF/Reference.html#method-i-editors_series","","<p>Return the list of series editors for this Reference. To add a series\neditor to the list, use:\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">reference</span>.<span class=\"ruby-identifier\">editors_series</span> <span class=\"ruby-operator\">...</span>\n</pre>\n"],["editors_series=","CFF::Reference","CFF/Reference.html#method-i-editors_series-3D","","<p>Replace the list of series editors for this reference.\n<p>Series editors can be a Person or Entity.\n"],["identifiers","CFF::Model","CFF/Model.html#method-i-identifiers","","<p>Return the list of identifiers for this citation. To add a identifier to\nthe list, use:\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">model</span>.<span class=\"ruby-identifier\">identifiers</span> <span class=\"ruby-operator\">...</span>\n</pre>\n"],["identifiers","CFF::Reference","CFF/Reference.html#method-i-identifiers","","<p>Return the list of identifiers for this citation. To add a identifier to\nthe list, use:\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">model</span>.<span class=\"ruby-identifier\">identifiers</span> <span class=\"ruby-operator\">...</span>\n</pre>\n"],["identifiers=","CFF::Model","CFF/Model.html#method-i-identifiers-3D","","<p>Replace the list of identifiers for this citation.\n"],["identifiers=","CFF::Reference","CFF/Reference.html#method-i-identifiers-3D","","<p>Replace the list of identifiers for this citation.\n"],["keywords","CFF::Model","CFF/Model.html#method-i-keywords","","<p>Return the list of keywords for this citation. To add a keyword to the\nlist, use:\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">model</span>.<span class=\"ruby-identifier\">keywords</span> <span class=\"ruby-operator\">&lt;&lt;</span> <span class=\"ruby-identifier\">keyword</span>\n</pre>\n"],["keywords","CFF::Reference","CFF/Reference.html#method-i-keywords","","<p>Return the list of keywords for this reference. To add a keyword to the\nlist, use:\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">model</span>.<span class=\"ruby-identifier\">keywords</span> <span class=\"ruby-operator\">&lt;&lt;</span> <span class=\"ruby-identifier\">keyword</span>\n</pre>\n"],["keywords=","CFF::Model","CFF/Model.html#method-i-keywords-3D","","<p>Replace the list of keywords for this citation.\n<p>Keywords will be converted to Strings on output.\n"],["keywords=","CFF::Reference","CFF/Reference.html#method-i-keywords-3D","","<p>Replace the list of keywords for this reference.\n<p>Keywords will be converted to Strings on output.\n"],["languages","CFF::Reference","CFF/Reference.html#method-i-languages","()","<p>Return the list of languages associated with this Reference.\n"],["new","CFF::Entity","CFF/Entity.html#method-c-new","(param)","<p>Create a new Entity with the supplied name.\n"],["new","CFF::File","CFF/File.html#method-c-new","(filename, param, comment = CFF_COMMENT, create: false)","<p>Create a new File. Either a pre-existing Model can be passed in or, as\nwith Model itself, a title can ...\n"],["new","CFF::Identifier","CFF/Identifier.html#method-c-new","(param = nil, *more)","<p>Create a new Identifier with the optionally supplied type and value.\nIf the supplied type is invalid, ...\n"],["new","CFF::Model","CFF/Model.html#method-c-new","(param)","<p>Initialize a new Model with the supplied title.\n"],["new","CFF::Person","CFF/Person.html#method-c-new","(param = nil, *more)","<p>Create a new Person with the optionally supplied given and family names.\n"],["new","CFF::Reference","CFF/Reference.html#method-c-new","(param, *more)","<p>Create a new Reference with the supplied title and, optionally, type.\nIf type is not given, or is not ...\n"],["open","CFF::File","CFF/File.html#method-c-open","(file)","<p>With no associated block, File.open is a synonym for ::read. If the\noptional code block is given, it ...\n"],["patent_states","CFF::Reference","CFF/Reference.html#method-i-patent_states","","<p>Return the list of patent states for this reference. To add a patent\nstate to the list, use:\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">model</span>.<span class=\"ruby-identifier\">patent_states</span> <span class=\"ruby-operator\">...</span>\n</pre>\n"],["patent_states=","CFF::Reference","CFF/Reference.html#method-i-patent_states-3D","","<p>Replace the list of patent states for this reference.\n<p>Patent states will be converted to Strings on output. …\n"],["preferred_citation","CFF::Model","CFF/Model.html#method-i-preferred_citation","","<p>Return the preferred citation for this citation.\n"],["preferred_citation=","CFF::Model","CFF/Model.html#method-i-preferred_citation-3D","","<p>Replace the preferred citation for this citation.\n"],["read","CFF::File","CFF/File.html#method-c-read","(file)","<p>Read a file and parse it for subsequent manipulation.\n"],["recipients","CFF::Reference","CFF/Reference.html#method-i-recipients","","<p>Return the list of recipients for this Reference. To add a recipient\nto the list, use:\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">reference</span>.<span class=\"ruby-identifier\">recipients</span> <span class=\"ruby-operator\">...</span>\n</pre>\n"],["recipients=","CFF::Reference","CFF/Reference.html#method-i-recipients-3D","","<p>Replace the list of recipients for this reference.\n<p>Recipients can be a Person or Entity.\n"],["references","CFF::Model","CFF/Model.html#method-i-references","","<p>Return the list of references for this citation. To add a reference to the\nlist, use:\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">model</span>.<span class=\"ruby-identifier\">references</span> <span class=\"ruby-operator\">...</span>\n</pre>\n"],["references=","CFF::Model","CFF/Model.html#method-i-references-3D","","<p>Replace the list of references for this citation.\n"],["reset_languages","CFF::Reference","CFF/Reference.html#method-i-reset_languages","()","<p>Reset the list of languages for this Reference to be empty.\n"],["senders","CFF::Reference","CFF/Reference.html#method-i-senders","","<p>Return the list of senders for this Reference. To add a sender to the\nlist, use:\n\n<pre>reference.senders &lt;&lt; ...</pre>\n"],["senders=","CFF::Reference","CFF/Reference.html#method-i-senders-3D","","<p>Replace the list of senders for this reference.\n<p>Senders can be a Person or Entity.\n"],["status=","CFF::Reference","CFF/Reference.html#method-i-status-3D","(status)","<p>Sets the status of this Reference. The status is restricted to a\ndefined set of status types.\n"],["to_apalike","CFF::Model","CFF/Model.html#method-i-to_apalike","(preferred_citation: true)","<p>Output this Model in an APA-like format. Setting\n<code>preferred_citation: true</code> will honour the <code>preferred_citation</code> ...\n"],["to_bibtex","CFF::Model","CFF/Model.html#method-i-to_bibtex","(preferred_citation: true)","<p>Output this Model in BibTeX format. Setting\n<code>preferred_citation: true</code> will honour the <code>preferred_citation</code> ...\n"],["translators","CFF::Reference","CFF/Reference.html#method-i-translators","","<p>Return the list of translators for this Reference. To add a translator\nto the list, use:\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">reference</span>.<span class=\"ruby-identifier\">translators</span> <span class=\"ruby-operator\">...</span>\n</pre>\n"],["translators=","CFF::Reference","CFF/Reference.html#method-i-translators-3D","","<p>Replace the list of translators for this reference.\n<p>Translators can be a Person or Entity.\n"],["type=","CFF::Identifier","CFF/Identifier.html#method-i-type-3D","(type)","<p>Sets the type of this Identifier. The type is restricted to a\ndefined set of identifier types.\n"],["type=","CFF::Reference","CFF/Reference.html#method-i-type-3D","(type)","<p>Sets the type of this Reference. The type is restricted to a\ndefined set of reference types.\n"],["validate","CFF::File","CFF/File.html#method-c-validate","(file)","<p>Read a file and return an array with the result. The result array is a\ntwo-element array, with <code>true</code>/ ...\n"],["validate!","CFF::File","CFF/File.html#method-c-validate-21","(file)","<p>Read a file and raise a ValidationError upon failure. If an error is\nraised it will contain the detected ...\n"],["write","CFF::File","CFF/File.html#method-c-write","(file, cff, comment = '')","<p>Write the supplied model or yaml string to <code>file</code>.\n"],["write","CFF::File","CFF/File.html#method-i-write","()","<p>Write this CFF File.\n"],["CHANGES","","CHANGES_md.html","","<p>Changes log for the Ruby CFF Library\n<p>Version 0.8.0\n<p>Add a comment field to the File class.\n"],["LICENCE","","LICENCE.html","","\n<pre>         Apache License\n   Version 2.0, January 2004\nhttp://www.apache.org/licenses/</pre>\n<p>TERMS AND CONDITIONS …\n"],["README","","README_md.html","","<p>Ruby CFF\n<p>Robert Haines and The Ruby Citation File Format Developers\n<p>A Ruby library for creating, editing, …\n"]]}}