# frozen_string_literal: true

# Copyright (c) 2018-2021 The Ruby Citation File Format Developers.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

##
module CFF

  # An Identifier represents an identifier in a CITATION.cff file.
  #
  # Identifier implements all of the fields listed in the
  # [CFF standard](https://citation-file-format.github.io/). All fields
  # are simple strings and can be set as such. A field which has not been set
  # will return the empty string. The simple fields are (with defaults in
  # parentheses):
  #
  # * `description`
  # * `type`
  # * `value`
  class Identifier < ModelPart

    ALLOWED_FIELDS = ['description', 'type', 'value'].freeze # :nodoc:

    # The [defined set of identifier types](https://github.com/citation-file-format/citation-file-format/blob/main/README.md#identifier-type-strings).
    IDENTIFIER_TYPES = ['doi', 'url', 'swh', 'other'].freeze

    # :call-seq:
    #   new -> Identifier
    #   new { |id| block } -> Identifier
    #   new(type, value) -> Identifier
    #   new(type, value) { |id| block } -> Identifier
    #
    # Create a new Identifier with the optionally supplied type and value.
    # If the supplied type is invalid, then neither the type or value are set.
    def initialize(param = nil, *more)
      if param.is_a?(Hash)
        @fields = param
        @fields.default = ''
      else
        @fields = Hash.new('')

        unless param.nil?
          self.type = param
          @fields['value'] = more[0] unless @fields['type'].empty?
        end
      end

      yield self if block_given?
    end

    # :call-seq:
    #   type = type
    #
    # Sets the type of this Identifier. The type is restricted to a
    # [defined set of identifier types](https://github.com/citation-file-format/citation-file-format/blob/main/README.md#identifier-type-strings).
    def type=(type)
      type = type.downcase
      @fields['type'] = type if IDENTIFIER_TYPES.include?(type)
    end
  end
end
