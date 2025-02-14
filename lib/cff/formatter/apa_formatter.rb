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
  # Generates an APALIKE citation string
  class ApaFormatter < Formatter # :nodoc:

    def self.format(model:, preferred_citation: true) # rubocop:disable Metrics/AbcSize
      model = select_and_check_model(model, preferred_citation)
      return if model.nil?

      output = []
      output << combine_authors(
        model.authors.map { |author| format_author(author) }
      )

      _, year = month_and_year_from_model(model)
      output << "(#{year})" unless year.empty?

      version = " (Version #{model.version})" unless model.version.to_s.empty?
      output << "#{model.title}#{version}#{software_label(model)}"
      output << publication_data_from_model(model)
      output << url(model)

      output.reject(&:empty?).join('. ')
    end

    def self.publication_data_from_model(model)
      return '' unless model.respond_to?(:journal)

      vol = "#{model.volume}(#{model.issue})" unless model.volume.to_s.empty?

      [model.journal, vol, model.start.to_s].reject(&:empty?).join(', ')
    end

    # Prefer a DOI over the other URI options.
    def self.url(model)
      model.doi.empty? ? super : "https://doi.org/#{model.doi}"
    end

    def self.software_label(model)
      return '' if model.is_a?(Reference) && !model.type.include?('software')

      ' [Computer software]'
    end

    def self.combine_authors(authors)
      return authors[0].chomp('.') if authors.length == 1

      "#{authors[0..-2].join(', ')}, & #{authors[-1]}".chomp('.')
    end

    def self.format_author(author)
      return author.name if author.is_a?(Entity)

      particle =
        author.name_particle.empty? ? '' : "#{author.name_particle} "
      suffix = author.name_suffix.empty? ? '.' : "., #{author.name_suffix}"

      "#{particle}#{author.family_names}, #{initials(author.given_names)}#{suffix}"
    end
  end
end
